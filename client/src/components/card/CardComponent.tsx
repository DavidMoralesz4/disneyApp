import cardStyle from './card.module.css'

interface PropsCard {
    image: string
    name: string
}

export default function CardComponent({image,name}: PropsCard) {
  return (
    <div className={cardStyle.cardContainer}>
        <img  className={cardStyle.cardImg} src={image} alt={name} />
        <h1  className={cardStyle.cardName}>{name}</h1>
    </div>
  )
}
