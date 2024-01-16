const User = require("./user");
const UserFavourites = require("./userFavourites");
const Figurine = require("./figurine");

Figurine.hasMany(UserFavourites, {
  foreignKey: "figurine_id",
  onDelete: "CASCADE",
});

UserFavourites.belongsTo(Figurine, {
  foreignKey: "figurine_id",
});

User.hasMany(UserFavourites, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

UserFavourites.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, UserFavourites, Figurine };
