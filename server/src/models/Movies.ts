import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbConf/connection";
import Character from "./Characters";

export class Movies extends Model {
    declare id: number
    declare title: string
    declare image: string
    declare date_release: Date
    declare score: number
    declare character_id: Character
}


Movies.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        
        image: {
            type: DataTypes.STRING,
            allowNull: false
        },

        date_release: {
            type: DataTypes.DATE,
            allowNull: false
        },

        score: {
            type: DataTypes.INTEGER,
            allowNull: false
        },

        character_id: {
            type: DataTypes.INTEGER,
        }
    }, 
    {
        sequelize,
        tableName: 'movies',
        modelName: 'Movies',
        timestamps: false,
        // paranoid: true
        deletedAt: 'destroyTime'
    }
)