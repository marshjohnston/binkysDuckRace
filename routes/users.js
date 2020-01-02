const usersRouter = require("express").Router();
const usersControllers = require("../controllers/usersControllers.js");

//created based on a walkthrough on https://dev.to/dwipr/example-rest-api-with-express-js-mongoose-and-babel-2483
// usersRouter.post('/', usersControllers.createUser); 

//got this one working on the plane too. all routes from /users/marshall 
usersRouter.get('/marshall', (req, res) => res.send('this is something new here'))

//as of the plane ride, i was able to get this to run the usersControllers.index method but need to make sure i can serve it up to the site. 
usersRouter.route('/users').get(usersControllers.index);

module.exports = usersRouter;


