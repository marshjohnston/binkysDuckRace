const mongoose = require("mongoose");

  usersSchema = new mongoose.Schema({
    u_id: {type: Number, required: true, unique: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    fullName: { type: String },
    password: { type: String, default: "", required: true },
    wins: { type: Number, default: "" },
    losses: { type:  Number, default: "" },
    totalRaces: { type: Number, default: 0, required: true },
    totalTime: { type: Number, required: true, default: 0 }
  });

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;

