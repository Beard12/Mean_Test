console.log('routes')
var users = require('../controllers/users.js');
module.exports = function(app){
	app.post('/test', users.login);
	app.get('/getpolls', users.getpolls);
	app.get('/getpoll/:id', users.getpoll);
	app.post('/createpoll', users.createpoll);
	app.post('/vote/:id', users.vote);
	app.get('/deletepoll/:id', users.deletepoll);
}