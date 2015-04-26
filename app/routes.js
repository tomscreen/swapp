// import model
var InputData = require('./models/inputData')

module.exports = function(app,dbcfg) {
	app.get('/api/inputData', function(req,res) {

		InputData.findAll(dbcfg, function(err,results) {
			res.json(results)
		})

	})
}