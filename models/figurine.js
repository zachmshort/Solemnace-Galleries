// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Figurine extends Model {}

// Figurine.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     title: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     creation_date: {
//       type: DataTypes.DATE,
//       allowNull: false,
//     },
//     filename: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     description: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     gallery_id: {
//       type: DataTypes.INTEGER,
//       references: {
//         model: 'gallery',
//         key: 'id',
//       },
//     },
//   },
//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'figurine',
//   }
// );

// module.exports = Figurine;

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
      primaryKey: true,
    
      },
    },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'figurine',
  }
);

module.exports = Figurine;

