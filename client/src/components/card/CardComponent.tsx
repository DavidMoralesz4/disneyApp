import { Card } from "@mui/material";
import cardStyle from "./card.module.css";
import { DateRange } from "@mui/icons-material";

interface PropsCard {
  image: string;
  name: string;
  date_release?: string
  title?: string
  onClick?: () => void;

}

export default function CardComponent({ image, name, date_release, onClick }: PropsCard) {
  return (
    <Card onClick={onClick} className={cardStyle.cardContainer} variant="outlined">
        <img className={cardStyle.cardImg} src={image} alt={name} />
        <h1 className={cardStyle.cardName}>{name}</h1>
        {date_release && <strong>{date_release}</strong>}
    </Card>
  );
}
