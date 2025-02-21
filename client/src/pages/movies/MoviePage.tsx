import CardComponent from "../../components/card/CardComponent";
import { useGetAllMoviQuery } from "../../redux/services/moviApi";
import cardsStyle from '../../components/cards/cards.module.css'
import searchStyle from '../../components/searchBar/search.module.css'
import { TextField } from "@mui/material";
import { useState } from "react";

export default function MoviePage() {
  const { data: dataMovies } = useGetAllMoviQuery("");
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState('')

  const  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  }

  const handleOpen = (id: string) => {
    setSelectedId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedId(null);
  };

  return (
    <div>
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
        {dataMovies?.map((movie) => (
          <CardComponent
            name={movie.title}
            image={movie.image}
            date_release={movie.date_release}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}
