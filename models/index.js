const User = require('./User');
const Gallery = require('./Gallery');
const Figurine = require('./Figurine');

Gallery.hasMany(Figurine, {
  foreignKey: 'gallery_id',
});

Figurine.belongsTo(Gallery, {
  foreignKey: 'gallery_id',
});

module.exports = { User, Gallery, Figurine };
