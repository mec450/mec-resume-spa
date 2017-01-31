var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var SamplesSchema   = new Schema({
  name: String
},{collection: 'samples'});

module.exports = mongoose.model('Samples', SamplesSchema);
