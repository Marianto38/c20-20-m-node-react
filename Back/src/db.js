require("dotenv").config();
const { USER, PASSWORD, HOST, PORT, BDD } = process.env;
const { Sequelize, DataTypes } = require("sequelize");

const database = new Sequelize(
  `postgres://${USER}:${PASSWORD}@${HOST}:${PORT}/${BDD}`,
  { logging: false }
);
const Users = require("./models/Users")(database, DataTypes);
const Reviews = require("./models/Reviews")(database, DataTypes);

Users.hasMany(Reviews, { foreignKey: "userId" });
Reviews.belongsTo(Users, { foreignKey: "userId" });

module.exports = {
  Users,
  Reviews,
  database,
};
