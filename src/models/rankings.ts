import { Sequelize, DataTypes } from "sequelize"; // Remove unused Model import

module.exports = (sequelize: Sequelize, DataTypes: typeof DataTypes) => {
  const Ranking = sequelize.define("Ranking", {
    // ... existing model definition ...
  });

  (Ranking as any).associate = (models: any) => {
    // ... existing associations ...
  };

  return Ranking;
};
