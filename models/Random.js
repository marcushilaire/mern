var mongoose = require("mongoose");

var Schema = mongoose.Schema;


var randomSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  image:{
    type: String,
  },
  zip:{
    type: Number,
    required: true
  }
});

var Random = mongoose.model("Random", randomSchema);

// Export the Hardware model
module.exports = Random;
