const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ducksSchema = new Schema({
  d_id: { type: Number, required: true, unique: true },
  duckName: { type: String, default:'unnamed', required: true },
  duckColour: { type: String, default: 'yellow', required: true}
  
});

const Ducks = mongoose.model("Ducks", ducksSchema);

module.exports = Ducks;
