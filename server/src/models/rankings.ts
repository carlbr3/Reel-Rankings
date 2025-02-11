import { Sequelize, DataTypes as DataTypesType, Model, } from 'sequelize';

module.exports = (sequelize: Sequelize, DataTypes: typeof DataTypesType) => {
    const Ranking = sequelize.define("Ranking", {
      user_id: { type: DataTypes.INTEGER, allowNull: false },
      movie_id: { type: DataTypes.INTEGER, allowNull: false },
      ranking_position: { type: DataTypes.INTEGER, allowNull: false }
    }, {
      timestamps: true
    });
  
    Ranking.associate = (models: any) => {
      Ranking.belongsTo(models.User, { foreignKey: "user_id" });
      Ranking.belongsTo(models.Movie, { foreignKey: "movie_id" });
    };
  
    return Ranking;
  };