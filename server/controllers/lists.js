var session = require('express-session'),
	List = require('../models/list'),
	User = require('../models/user')

module.exports = {
	create: (req, res) => {
		const list = new List(req.body);
		list.save( (err) => {
			if (err) {
				return res.json(err);
			}
			return res.json(list);
		});
	},
	
	index: (req, res) => {
		List.find({})
		.populate('_user')
		.exec( function(err, lists) {
			if (err) {
				return res.json(err.errors);
			}
			return res.json(lists);
		});
	}
}