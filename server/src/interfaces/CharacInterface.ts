import { IMovie } from "./MovieInterface"

export interface ICharacters {
    id?: number
    name: string
    image: string
    age: number
    weight: number
    history: string
    movie_id?: IMovie
}