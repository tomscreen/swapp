// modules
var express = require('express')
var bodyParser = require('body-parser')

// config
var dbcfg = require('./config/db')
var port = process.env.PORT || 3000

// setup app
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(__dirname + '/public'))

// configure api routes
require('./app/routes')(app, dbcfg)

// delegate all other routes to angular
app.get('*', function(req,res) {
	res.sendFile(__dirname+'/public/views/index.html')
})

// start app
app.listen(port)

// export
module.exports = app