const db = require('../models')
// const Gift = require('../models/Gifts.js')

module.exports = {

	// added based on a walkthrough on https://dev.to/dwipr/example-rest-api-with-express-js-mongoose-and-babel-2483
	createUser: (req, res) => {
		const user = req.body; 

		db.Users.create(user)
		.then((newUser) => {
			res.json(newUser)
		})
		.catch((errors) => {
			res.status(500).json({errors})
		}) 
	}, 
	// list all users
	index: (req, res) => {
		db.Users.find({}, (err, users) => {
			res.json(users)
			console.log(`at least we got it to run`); 
		})
	}

	// add a comma here to pull all these modules back, or to add another. 

// 	// find the logged in user for the dashboard
// 	show: (req, res) => {
// 		db.Users
// 			.findById({ _id: req.params.id })
// 			.then(dbModel => res.json(dbModel))
// 			.catch(err => res.status(422).json(err));
// 	},


// 	// creates a new user
// 	create: (req, res) => {
// 		db.Users
// 		.findOne({ email: req.body.email })
// 		  .then(dbUser => {
// 			console.log("email found");
// 			console.log(dbUser);
// 			if (dbUser == null) {
// 			  console.log("req.body", req.body);
// 			  bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
// 				// Store hash in your password DB.
// 				console.log(hash);
// 				req.body.password = hash;
// 				db.Users.create(req.body)
// 				  .then(dbModel => res.json(dbModel))
// 				  .catch(err => res.status(422).json(err));
// 			  });
// 			} else {
// 			  console.log("email already exists");
// 			  res.json({
// 				validate: false
// 			  });
// 			}
// 		  })
// 			.catch(err => res.status(422).json(err))
// 	  },

// 	// create: (req, res) => {
// 	// 	User.create(req.body, (err, user) => {
// 	// 		if(err) return res.json({success: false, code: err.code})
// 	// 		// once user is created, generate a token to "log in":
// 	// 		const token = signToken(user)
// 	// 		res.json({success: true, message: "User created. Token attached.", token})
// 	// 	})

// 	// },

	

// 	// create a gifts collection
// 	createGifts: (req, res) => {
// 		db.Gift.create(req.body, (err) => {
// 			if(err) return res.json({success: false, code: err.code})
// 			// once user is created, generate a token to "log in":
// 			// const token = signToken(user)
// 			res.json({success: true, message: "Gift added."})
// 		})

// 	},
// 	// update an existing user
// 	update: (req, res) => {
//     db.User
//       .findOneAndUpdate({ _id: req.params.id }, req.body)
//       .then(dbModel => res.json(dbModel))
//       .catch(err => res.status(422).json(err));
//   },


// 	// delete an existing user
// 	destroy: (req, res) => {
// 		db. User.findByIdAndRemove(req.params.id, (err, user) => {
// 			res.json({success: true, message: "User deleted.", user})
// 		})
// 	},
}