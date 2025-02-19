import { Card } from "@mui/material";
import cardStyle from "./card.module.css";

interface PropsCard {
  image: string;
  name: string;
  onClick: () => void;
}

export default function CardComponent({ image, name, onClick }: PropsCard) {
  return (
    <Card onClick={onClick} className={cardStyle.cardContainer} variant="outlined">
      {/* <div className={cardStyle.cardContainer}> */}
        <img className={cardStyle.cardImg} src={image} alt={name} />
        <h1 className={cardStyle.cardName}>{name}</h1>
      {/* </div> */}
    </Card>
  );
}
