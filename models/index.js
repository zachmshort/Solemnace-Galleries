const User = require("./User");
const userFavourites = require("./userFavourites");
const Figurine = require("./Figurine");

// userFavourites.hasMany(Figurine, {
//   foreignKey: "userFavourites_id",
// });

// Figurine.belongsTo(userFavourites, {
//   foreignKey: "userFavourites_id",
// });

module.exports = { User, userFavourites, Figurine };
