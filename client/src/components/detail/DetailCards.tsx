import detailStyle from "./detail.module.css";

// interface IMovies {
//     title: string
// }

interface PropsDetail {
  name: string;
  image: string;
  age: number;
  weight: number;
  history: string;
  movies: any;
}

export default function DetailCards({
  name,
  image,
  age,
  weight,
  history,
  movies,
}: PropsDetail) {
  return (
    <div className={detailStyle.container}>
      <div>
        <img src={image} alt={name} className={detailStyle.imgCards} />
      </div>
      <div>
        <p className={detailStyle.name}>{name}</p>
        <p className={detailStyle.age}>Ano:  {age}</p>
        <p className={detailStyle.weight}>Peso:  {weight}kg</p>
        <p className={detailStyle.history}>Descripcion: {history}</p>
        <strong className={detailStyle.movies}>{movies}</strong>
      </div>
    </div>
  );
}
