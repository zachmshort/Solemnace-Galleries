const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class UserFavourites extends Model {}

UserFavourites.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "user", key: "id" },
    },
    figurine_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: "figurine", key: "id" },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "UserFavourites",
  }
);

module.exports = UserFavourites;
