import sequelize from "../config/connection.js";
import { UserFactory } from "./user.js";
import movieModel from "./movie.js";
import { DataTypes } from "sequelize";

const User = UserFactory(sequelize);
const Movie = movieModel(sequelize, DataTypes);
export { User, Movie };
