const { Gallery } = require('../models');

const gallerydata = [
    {

    },
];

const seedGallery = () => Gallery.bulkCreate(gallerydata);

module.exports = seedGallery;
