import { Model, Sequelize, DataTypes } from 'sequelize';

module.exports = (sequelize: Sequelize, DataTypes) => {
    const Movie = sequelize.define("Movie", {
      title: { type: DataTypes.STRING, allowNull: false },
      release_year: DataTypes.INTEGER,
      genre: DataTypes.STRING,
      tmdb_id: { type: DataTypes.INTEGER, unique: true }
    }, {
      timestamps: true
    });
  
    Movie.associate = (models: any) => {
      Movie.hasMany(models.Ranking, { foreignKey: "movie_id" });
    };

    return Movie;
};

export const initMovieModel = (sequelize: Sequelize) => {
  const Movie = sequelize.define("Movie", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    rated: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    released: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    director: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    actors: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    plot: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    awards: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    poster: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imdbRating: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imdbID: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: 'Movies',
  });

  return Movie;
};