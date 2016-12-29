let seedDataUsers = require('./seed-data/seed-users.js')
// 
const express = require('express')
const cors = require('cors')

const app = express();
app.use( cors() );

app.set('port', (process.env.PORT || 8080));

app.get('/', function(req, res){
	res.json({
		about: "this is simple-api",
		paths: {
			"/users"  : `${req.protocol}://${req.get('host')}/users`
		}
	})
})

app.get('/users', function(req,res){
	res.json(seedDataUsers)
})

app.listen(app.get('port'), function(){
	console.log(`App running on ${app.get('port')}`)
})
