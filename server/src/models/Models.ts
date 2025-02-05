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
  },
  {
    sequelize,
    tableName: "characters",
    modelName: "Character",
    timestamps: false,
    paranoid: true,
    // Si desea dar un nombre personalizado a la columna deleteAt
    // deletedAt: 'destroyTime',
  }
);

export class Movies extends Model {
  declare id: number;
  declare title: string;
  declare image: string;
  declare date_release: Date;
  declare score: number;
}

Movies.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    image: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    date_release: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "movies",
    modelName: "Movies",
    timestamps: false,
    // paranoid: true
    deletedAt: "destroyTime",
  }
);

export class CharacMovie extends Model {
  declare characterId: number;
  declare movieId: number;
}

CharacMovie.init(
  {
    characterId: {
      type: DataTypes.INTEGER,
      references: {
        model: Character,
        key: "id",
      },
    },

    movieId: {
      type: DataTypes.INTEGER,
      references: {
        model: Movies,
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: 'characMovie',
    modelName: 'CharacMovie',
    timestamps: false,
    deletedAt: "destroyTime",

  }
);

Movies.belongsToMany(Character, { through: 'characMovie', foreignKey: 'movieId'})
Character.belongsToMany(Movies, {through: 'characMovie', foreignKey: 'characterId'})
