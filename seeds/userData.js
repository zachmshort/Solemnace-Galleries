const { User } = require("../models");

const userData = [
  {
    username: "Termagants",
    email: "bingus@aol.com",
    password: "spaghetti",
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
