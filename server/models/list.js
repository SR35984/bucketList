var mongoose = require('mongoose');

var ListSchema = new mongoose.Schema({
	title: {
		type: String,
		required: [true, "Title is required."],
		minlength: [2, "Title minimum characters is 5."]
	},
	description: {
		type: String,
		required: [true, "Description is required."],
		minlength: [2, "Description minimum characters is 10."]
	},
	_user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
}, { timestamps: true });

module.exports = mongoose.model('List', ListSchema);
