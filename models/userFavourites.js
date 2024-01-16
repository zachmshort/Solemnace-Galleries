const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class userFavourites extends Model {}

userFavourites.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // user_name: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: { model: "user", key: "username" },
    // },
    // figurine_id: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   references: { model: "Figurine", key: "id" },
    // },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "userFavourites",
  }
);

module.exports = userFavourites;
