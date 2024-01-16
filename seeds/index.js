const sequelize = require("../config/connection");
const figurineData = require("./figurineData.json");
const userData = require("./userData.json");
const { Figurine, User } = require("../models");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await Figurine.bulkCreate(figurineData);
  await User.bulkCreate(userData);
  process.exit(0);
};

seedAll();
