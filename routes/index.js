const router = require('express').Router();
const express = require('express'); 
const userRoutes = require('./users');
const racesRoutes = require("./races");
const userControllers = require("../controllers/usersControllers")

// initializing middleware 
router.use(express.json()); 

//when the URL __dirname/users get served, then use the 'userRoutes' routes from './users' 
router.use('/users', userRoutes);

// this looks like a more elaborate way to use the 'user' routes than the above. 
// router.use('/users', (req, res) => {
//     res.send(userRoutes); 
// }); 

router.use('/', function (req, res) {
    res.sendFile('/Users/mjohnston/Desktop/Repo/binkysDuckRace/binkys-frontend/public/index.html')
});


module.exports = router;