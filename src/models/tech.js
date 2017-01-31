var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var TechSchema   = new Schema({
  name: String
},{collection: 'tech'});

module.exports = mongoose.model('Tech', TechSchema);
