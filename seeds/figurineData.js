const { figurine } = require('../models');

const figurineData = [
    {title: '',
    creation_date: '',
    gallery_id: '',
    filename: '',
    description: ''},
];

const seedFigurines = () => Painting.bulkCreate(figurineData);

module.exports = seedFigurines;