var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BearSchema   = new Schema({
  name: String
},{collection: 'mecdev'});

BearSchema.methods.myFunc = function() {
  console.log('BEAR TEST!!!!!!!!!!!!!!!!!!!!!!!');
};

module.exports = mongoose.model('Bear', BearSchema);
