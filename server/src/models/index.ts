import sequelize from "../config/connection.js";
import { UserFactory } from "./user";
import movieModel from "./movie";
import { DataTypes } from "sequelize";

const User = UserFactory(sequelize);
const Movie = movieModel(sequelize, DataTypes);
export { User, Movie };
