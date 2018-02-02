var session = require('express-session'),
	User = require('../models/user');

module.exports = {
	create: (req, res) => {
		let newUser = new User(req.body);
		User.findOne({name: newUser.name}, (err, user) => {
			if (user) {
				session.user_id = user._id;
				return res.json(user);
			}
			newUser.save( (err) => {
				if (err) {
					return res.json(err.json());
				}
				session.user_id = newUser._id;
				return res.json(newUser);
			});
		});
	},

	index: (req, res) => {
		User.find({})
		.exec( function(err, users) {
			if (err) {
				return res.json(err.errors);
			}
			return res.json(users);
		});
	},

	show: (req, res) => {
		User.findOne({_id: req.params.id})
		.populate('_list')
		.exec( function(err, user) {
			if (err) {
				return res.json(err.errors);
			}
			return res.json(user);
		});
	},

	// list: (req,res) => {
	// 	List
	// }
}