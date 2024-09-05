const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  const Conversations = sequelize.define("Conversations", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user1Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user2Id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  });

  return Conversations;
};