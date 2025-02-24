import CardComponent from "../../components/card/CardComponent";
import {
  useGetAllMoviQuery,
  useGetDetailMovieQuery,
  useGetMoviesQuery,
} from "../../redux/services/moviApi";
import cardsStyle from "../../components/cards/cards.module.css";
import searchStyle from "../../components/searchBar/search.module.css";
import { Box, Modal, TextField } from "@mui/material";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import DetailMovies from "../../components/detailMovies/DetailMovies";

export default function MoviePage() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const { data, isLoading, error } = useGetMoviesQuery(search);
  const { data: allMovies } = useGetAllMoviQuery("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const { data: movies } = useGetDetailMovieQuery(selectedId!, {
    skip: !selectedId,
  });

  const handleOpen = (id: string) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedId(null);
  };

  if (isLoading) return <p>Cargando...</p>;
  if (error) return;

  return (
    <>
      <div className={cardsStyle.containerSearch}>
        <TextField
          placeholder="Buscar..."
          type="text"
          name="name"
          className={searchStyle.search}
          size="small"
          onChange={handleChange}
        />
      </div>

      <div className={cardsStyle.allCards}>
         {
                search ? (
                  data?.map((movie) => (
                    <CardComponent
                      key={movie.id}
                      image={movie.image}
                      name={movie.title}
                      onClick={() => handleOpen(movie.id)}
                      />
                    ))
                  ) : (
                    allMovies?.map((movie) => (
                      <CardComponent
                      key={movie.id}
                      image={movie.image}
                      name={movie.title}
                      onClick={() => handleOpen(movie.id)}
                      />
                    ))
                  )
                }
      </div>

      <Modal open={open} onClose={handleClose} className={cardsStyle.modal}>
        <Box>
          {movies ? (
            <div className={cardsStyle.containerDetails}>
              <DetailMovies
                id={movies.id}
                title={movies.title}
                image={movies.image}
                score={movies.score}
                date_release={movies.date_release}
              />
              <button className={cardsStyle.btn} onClick={handleClose}>
                <CloseIcon />
              </button>
            </div>
          ) : (
            <p>Cargando detalles...</p>
          )}
        </Box>
      </Modal>
    </>
  );
}
