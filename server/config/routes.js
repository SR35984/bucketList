var path = require('path'),
	users = require('../controllers/users'),
	sessions = require('../controllers/sessions'),
	lists = require('../controllers/lists');


module.exports = (app) => {
	app.post('/users', users.create);
	app.get('/users', users.index);
	app.get('/users/:id', users.show);
	// app.get('/lists'), users.list);

	app.get('/sessions', sessions.find);
	app.delete('/sessions', sessions.delete);

	app.post('/dashboard', lists.create);
	app.get('/dashboard', lists.index);

	app.all("*", (req,res,next) => {
		res.sendFile(path.resolve("./client/dist/index.html"))
	});
}