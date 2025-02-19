import { Box, Modal, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  useDetailCharQuery,
  useGetAllCharQuery,
  useGetCharactersQuery,
} from "../../redux/services/charApi";
import CardComponent from "../card/CardComponent";
import cardsStyle from "./cards.module.css";
import DetailCards from "../detail/DetailCards";
import { useState } from "react";
import searchStyle from '../../components/searchBar/search.module.css'

export default function CardsComponent() {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [search, setSearch] = useState('')
  const { data, isLoading, error} = useGetCharactersQuery(search);
  const {data: allCharacters} = useGetAllCharQuery('')

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)    
  }
  const { data: character } = useDetailCharQuery(selectedId!, {
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
  if (error) return <p>Error al cargar los personajes</p>;

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
            data?.map((chara) => (
              <CardComponent
                key={chara.id}
                image={chara.image}
                name={chara.name}
                onClick={() => handleOpen(chara.id)}
                />
              ))
            ) : (
              allCharacters?.map((chara) => (
                <CardComponent
                key={chara.id}
                image={chara.image}
                name={chara.name}
                onClick={() => handleOpen(chara.id)}
                />
              ))
            )
          }
      </div>

      <Modal open={open} onClose={handleClose} className={cardsStyle.modal}>
        <Box>
          {character ? (
            <div className={cardsStyle.containerDetails}>
              <DetailCards
                name={character.name}
                image={character.image}
                age={character.age}
                history={character.history}
                movies={character.movies}
                weight={character.weight}
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
