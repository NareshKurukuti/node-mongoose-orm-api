var mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://naresh:123456@ds253587.mlab.com:53587/nodejs');

module.export = {
	mongoose 
}