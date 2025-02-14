import { Sequelize, DataTypes } from "sequelize";

export interface UserLogin {
  email: string;
  password: string;
}

module.exports = (sequelize: Sequelize, DataTypes: typeof DataTypes) => {
  const Movie = sequelize.define("Movie", {
    // ... existing model definition ...
  });

  (Movie as any).associate = (models: any) => {
    Movie.hasMany(models.Ranking, { foreignKey: "movie_id" });
  };

  return Movie;
};
