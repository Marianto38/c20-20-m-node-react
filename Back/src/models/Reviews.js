const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define("Reviews", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Reviews;
};
