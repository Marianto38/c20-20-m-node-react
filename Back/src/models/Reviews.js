const { DataTypes, Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define("Reviews", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    id_user: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: "Users",
        key: "id",
      },
    },
    review: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Reviews;
};
