const mongoose = require("mongoose");

 ducksSchema = new mongoose.Schema({
    d_id: { type: Number, required: true, unique: true },
    duckName: { type: String, default:'unnamed', required: true },
    duckColour: { type: String, default: 'yellow', required: true },
    duckImg: { type: String, default: '' }
});

const Ducks = mongoose.model("Ducks", ducksSchema);

module.exports = Ducks;
