import sequelize from '../config/connection.js';
import { UserFactory } from './user.ts';
import { initMovieModel } from './movie.ts';

const User = UserFactory(sequelize);
const Movie = initMovieModel(sequelize);
export { User, Movie };