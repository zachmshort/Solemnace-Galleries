const sequelize = require("../config/connection");
const figurineData = require("./figurineData.json");
const {Figurine} = require("../models")

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await Figurine.bulkCreate(figurineData);

  process.exit(0);

};



seedAll();
