const mongoose = require("mongoose");
  // bcrypt = require("bcrypt-nodejs"),

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

// adds a method to a user document object to create a hashed password
// userSchema.methods.generateHash = function(password) {
//   return bcrypt.hashSync(password, bcrypt.genSaltSync(8));
// };

// adds a method to a user document object to check if provided password is correct
// userSchema.methods.validPassword = function(password) {
//   return bcrypt.compareSync(password, this.password);
// };

// middleware: before saving, check if password was changed,
// and if so, encrypt new password before saving:
// userSchema.pre("save", function(next) {
//   if (this.isModified("password")) {
//     this.password = this.generateHash(this.password);
//   }
//   next();
// });

const Users = mongoose.model("Users", usersSchema);
module.exports = Users;
