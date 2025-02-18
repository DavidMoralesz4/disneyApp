import { useGetCharactersQuery } from "../../redux/services/charApi";
import CardComponent from "../card/CardComponent";
import cardsStyle from "./cards.module.css";

export default function CardsComponent() {
  const { data, error, isLoading } = useGetCharactersQuery(null);

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar los personajes</p>;

  return (
    <div className={cardsStyle.allCards}>
      {data?.map((chara) => (
        <CardComponent key={chara.id} image={chara.image} name={chara.name} />
      ))}
    </div>
  );
}
