const express = require('express')
const app = express()
const port = 3000
var path = require('path');


let users = {
	'user1' : '123456',
	'vita'  : '0102302',
}



app.get('/', function(req, res){
 	res.sendFile(path.join(__dirname + '/index.html'));
});



app.post('/credentials', function(req,res){
	//send always a good server response because server validation is not implemented 
	res.json('server good conection');

	let email 	= req.body.email,
	firstname 	= req.body.firstname,
	lastname 	= req.body.lastname,
	pswd 		= req.body.password;

});


app.get('/dashboard', function(req,res){

	//todo if session exists
	res.sendFile(path.join(__dirname + '/window.html'));

});




app.listen(port, () => console.log(`Example app listening on port ${port}!`))

