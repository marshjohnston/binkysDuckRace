const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const racesSchema = new Schema({
  r_id: { type: Number, required: true, unique: false },
  u_id: { type: Number, required: true },
  d_id: { type: Number, required: true },
  creek: { type: String, enum: ['AFC', 'NFC'], required: true },
  startTime: { type: Number },
  finishTime: { type: Number },
  raceTime: { type: Number, required: true },
  position: { type: Boolean, default: false },
  date: { type: Date, default: Date.now, required: true }
});

const Races = mongoose.model("Races", racesSchema);

module.exports = Races;
