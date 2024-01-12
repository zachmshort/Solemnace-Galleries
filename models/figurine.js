const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Figurine extends Model {}

Figurine.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
    
    },
    edition: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      
    },
    filename: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    faction: {
      type: DataTypes.STRING,
      allowNull: false,

      },
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "figurine",
  }
);

module.exports = Figurine;

