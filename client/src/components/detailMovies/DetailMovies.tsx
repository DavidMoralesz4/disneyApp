import { IMovies } from "../../redux/services/moviApi";
import moviesDetaStyle from './moviesDetail.module.css'

export default function DetailMovies({
  title,
  image,
  score,
  date_release,
}: IMovies) {
  return (
    <div className={moviesDetaStyle.container}>
      <div>
        <img src={image} alt={title} className={moviesDetaStyle.imgCards} />
      </div>
      <div>
        <p className={moviesDetaStyle.name}>{title}</p>
        <p className={moviesDetaStyle.age}>Puntuación: {score}</p>
        <p className={moviesDetaStyle.weight}>Fecha: {date_release}</p>
      </div>
    </div>
  );
}
