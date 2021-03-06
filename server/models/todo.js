var mongoose = require('mongoose');

/* Model For Validations, type, default */
var Todo = mongoose.model('Todo', {
	text: {
		type :  String,
		required: true,
		minlength: 1,
		trim : true
	},
	completed : {
		type :  Boolean,
		default: false
	},
	completedAt: {
		type :  Number,
		default: null
	}
});
/* End Here */

module.exports = {Todo}