  
const router = require("express").Router();
const racesControllers = require("../controllers/racesControllers");

const bodyParser = require("body-parser");
const express = require('express');
const app = express();
app.use(bodyParser.json());


///////this route is for creating new wall after user sign up
// router.route("/createWall").post(racesControllers.createWall);

router.route("/searchRaces").get(racesControllers.findAllRaces);
// router.route("/getAllRaces").get(racesControllers.findAllSearchedRaces);
// router.route("/saveRacesInfo").post(racesControllers.updateRaceWall);

// router.route("/loadWallInfo").get(wallControllers.loadWall);


module.exports = router;