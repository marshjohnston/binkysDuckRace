const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost:27017/WallOfKindness"
);

const userSeed = [
    {
        u_id: 1,
        firstName: "Blake",
        lastName: "Johnston",
        fullName: "Blake Johnston",
        password: "password",
        wins: 0,
        losses: 0,
        totalRaces: 0,
        totalTime: 0
    },
    {
        u_id: 2,
        firstName: "Marshall",
        lastName: "Johnston",
        fullName: "Blake Johnston",
        password: "password",
        wins: 0,
        losses: 0,
        totalRaces: 0,
        totalTime: 0
    },
    {
        u_id: 3,
        firstName: "Avril",
        lastName: "Peter",
        fullName: "Avril Peter",
        password: "password",
        wins: 0,
        losses: 0,
        totalRaces: 0,
        totalTime: 0
    },
    {
        u_id: 4,
        firstName: "Georgia",
        lastName: "Johnston",
        fullName: "Georgia Johnston",
        password: "password",
        wins: 0,
        losses: 0,
        totalRaces: 0,
        totalTime: 0
    },
    {
        u_id: 5,
        firstName: "Byron",
        lastName: "Johnston",
        fullName: "Byron Johnston",
        password: "password",
        wins: 0,
        losses: 0,
        totalRaces: 0,
        totalTime: 0
    }
];

db.User.remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });