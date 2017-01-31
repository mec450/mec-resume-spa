var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var ExperienceSchema   = new Schema({
  name: String
},{collection: 'experience'});

module.exports = mongoose.model('Experience', ExperienceSchema);
