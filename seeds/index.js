const sequelize = require("../config/connection");
const seedFigurines = require("./figurineData");

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFigurines();

  process.exit(0);
};

seedAll();
