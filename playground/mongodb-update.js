const {MongoClient , ObjectID}= require('mongodb')
//const MongoClient= require('mongodb').MongoClient; 
  
MongoClient.connect('mongodb://naresh:123456@ds253587.mlab.com:53587/nodejs', (err, db) => { 

	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	
	console.log('Connected to MongoDB server');
	/* Find One And update */
	db.collection('Todos').findOneAndUpdate({
		_id : new ObjectID('5a5de255734d1d347184a94e')
	}, {
		$set : {
				text : "Kurukuti Naresh"
		}
	}, {
		returnOriginal : false
	}).then((result) => {
		console.log(result);
	});
	/* End here */
	
	
	/* Data base connection close */
	db.close();
	/* End Connection */
	
});