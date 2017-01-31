var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PlansSchema   = new Schema({
  name: String
},{collection: 'plans'});

module.exports = mongoose.model('Plans', PlansSchema);
