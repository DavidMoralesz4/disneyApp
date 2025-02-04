import { IMovie } from "./MovieInterface"

export interface ICharacters {
    id?: number
    name: string
    image: string
    weight: number
    age: number
    history: string
    movie_id?: IMovie
}