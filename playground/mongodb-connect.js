const {MongoClient , ObjectID}= require('mongodb')
//const MongoClient= require('mongodb').MongoClient; 

//var obj = new ObjectID();
//console.log(obj);

MongoClient.connect('mongodb://naresh:123456@ds253587.mlab.com:53587/nodejs', (err, db) => { 

	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	
	console.log('Connected to MongoDB server');
	
	
	/* Insert one document in 'Todos' Collection */
	db.collection('Todos').insertOne({
		text : 'Something to do',
		completed: true
	}, (err, result) => {
		if(err) {
			return console.log('Unable to insert todo', err);
		}
		
		console.log(JSON.stringify(result.ops));
	})
	/* End here insert one */
	
	/* Insert new doc into 'Users' (name, age, location) */
	db.collection('Users').insertOne({
				name : 'Naresh kurukuti',
				age: 25,
				location:'Hyderabad'
	}, (err, result) => {
			if(err) {
				return console.log('Unable to Insert User', err);
			}
			console.log(result.ops);
	});
	/*End here Insert Users */
	 
	/* Data base connection close */
	db.close();
	/* End Connection */
	
});