import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbConf/connection";

export class Character extends Model {
  declare id: number;
  declare image: string;
  declare name: string;
  declare age: number;
  declare weight: number;
  declare history: string;
}

Character.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    history: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    movie_id: {
        type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    tableName: "characters",
    modelName: "Character",
    timestamps: false,
    paranoid: true,
    // Si desea dar un nombre personalizado a la columna deleteAt
    deletedAt: 'destroyTime',
  }
);


export default Character
