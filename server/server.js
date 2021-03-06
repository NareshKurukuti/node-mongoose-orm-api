var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo'); 
var {User} = require('./models/user');

var app = express();

/* To show the data in Middleware in json */
app.use(bodyParser.json());
/* End Here */


app.post('/todos', (req, res) => {
	var newTodo = new Todo({
		text : 'Naresh Kurukuti'
		//text : req.body.text //this is for giving text from post man
	});

	newTodo.save().then((doc) => {
		res.send(doc);
	}, (e) => {
		res.status(400).send(e);
	}) 
});


app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send({
			todos
			});
	}, (e) => {
		res.status(400).send(e);
	})
});
app.listen(3000, () => {
	console.log('Started on port 3000');
})



module.exports = {app};