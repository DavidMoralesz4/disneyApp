import { Model } from "sequelize"
import { ICharacters } from "./CharacInterface"

export interface IMovie {
    id: number
    title: string
    image: string
    date_release: Date
    character_id: ICharacters
    score: number
}