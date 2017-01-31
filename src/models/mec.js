var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var MecSchema   = new Schema({
  name: String
},{collection: 'me'});

module.exports = mongoose.model('Mec', MecSchema);
