const sequelize = require('../config/connection');
const seedFigurines = require('./figurineData');
//const seedPaintings = require('./paintingData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedFigurines();

 // await seedPaintings();

  process.exit(0);
};

seedAll();
