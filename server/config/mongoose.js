var mongoose = require('mongoose'),
	db_name = "BucketList";

mongoose.connect(`mongodb://localhost/${db_name}`);