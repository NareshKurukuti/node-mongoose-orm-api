const {MongoClient , ObjectID}= require('mongodb')
//const MongoClient= require('mongodb').MongoClient; 
  
MongoClient.connect('mongodb://naresh:123456@ds253587.mlab.com:53587/nodejs', (err, db) => { 

	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	
	console.log('Connected to MongoDB server');
	
	/* To get the Todos collection */
	db.collection('Todos').find().toArray().then((docs) => {
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});
	/* End here */
	
	/* To get the Users Collection */
	db.collection('Users').find().toArray().then((docs) => {
		console.log('Users');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log('Unable to fetch users', err);
	});
	/* End here */
	
	
	/* To get the Todos collection based on where clause */
	db.collection('Todos').find({completed : false}).toArray().then((docs) => {
		console.log('Todos based on completed is false');
		console.log(JSON.stringify(docs, undefined,2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});
	/* End here */
	
	
	/* To get the Users collection based on id */
	db.collection('Users').find({ _id: new  ObjectID('5a5dbea2eed3553c2c294579') }).toArray().then((docs) => {
		console.log('Users based on _id');
		console.log(JSON.stringify(docs, undefined,2));
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});
	/* End here */
	
	/* To get the count of the Todos */
	db.collection('Todos').find().count().then((count) => {
		console.log('Count of todos' , count); 
	}, (err) => {
		console.log('Unable to fetch todos', err);
	});
	/* End here */
	
	/* Data base connection close */
	db.close();
	/* End Connection */
	
});