const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define("Users", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    professionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Professions',
        key: 'id'
      }
    },
    sexo: {
      type: DataTypes.ENUM(
        "MASCULINO",
        "FEMENINO",
        "NO ME IDENTIFICO CON NINGUNA DE LAS ANTERIORES"
      ),
      allowNull: false,
    },
  });
  return Users;
};
