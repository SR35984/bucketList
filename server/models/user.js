var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Name is required."],
		minlength: [2, "Name minimum characters is 2."]
	},
	lists: [{
		type: mongoose.Schema.Types.ObjectId,
		ref: 'List'
	}]
}, { timestamps: true });

var User = mongoose.model('User', UserSchema);

module.exports = User;