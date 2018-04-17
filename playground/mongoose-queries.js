const {objectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

/* var id = '5a5f0dd8c99ac23634ecfd1e';


if(!ObjectID.isValid(id)) {
	 console.log('ID not valid');
} */

// /* Find Query */
// Todo.find({
	// _id : id
// }).then((todos) => {
	// console.log('Todos By find using id', todos);
// });
// /* End Here */


// /* findOne Query */	
// Todo.findOne({
	// _id:id
// }).then((todo) => {
	// console.log('Todo By findOne using id', todo);
// });
// /* End Here */
	
	
/* Todo.findById(id).then((todo) => {
	if(!todo) {
		return console.log('id not found');
	}
	console.log('Todo By Id', todo);
}).catch(e) => console.log(e); */

User.findById('5a602ac9dee31678dcb5f245').then((user) => {
	if(!user) {
		return console.log('Unable to find user');
	}
	console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
	console.log(e);
});