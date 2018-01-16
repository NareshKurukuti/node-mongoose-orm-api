const {MongoClient , ObjectID}= require('mongodb')
//const MongoClient= require('mongodb').MongoClient; 
  
MongoClient.connect('mongodb://naresh:123456@ds253587.mlab.com:53587/nodejs', (err, db) => { 

	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}
	
	console.log('Connected to MongoDB server');
	
	 /* Delete Many */
	  db.collection('Todos').deleteMany({completed : false}).then((result) => {
		console.log(result);
	 });
	 /* End here */
	 
	 /* Delete One */
	 db.collection('Todos').deleteOne({text : 'eeeeeee'}).then((result) => {
		console.log(result);
	 });
	 /* End here */
	 
	 
	 /* Find One Document and Delete It */
	 db.collection('Todos').findOneAndDelete({text : 'eeeeeee'}).then((result) => {
		console.log(result);
	 });
	 /* End here */
	 
	 
	/* Data base connection close */
	db.close();
	/* End Connection */
	
});