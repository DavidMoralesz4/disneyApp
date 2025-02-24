import { CharactersDetail } from "../../redux/services/charApi";
import detailStyle from "./detail.module.css";

export default function DetailCards({
  name,
  image,
  age,
  weight,
  history,
}: CharactersDetail) {
  return (
    <div className={detailStyle.container}>
      <div>
        <img src={image} alt={name} className={detailStyle.imgCards} />
      </div>
      <div>
        <p className={detailStyle.name}>{name}</p>
        <p className={detailStyle.age}>Ano: {age}</p>
        <p className={detailStyle.weight}>Peso: {weight}kg</p>
        <p className={detailStyle.history}>Descripcion: {history}</p>
      </div>
    </div>
  );
}
