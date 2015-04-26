var mongo = require('mongodb').MongoClient

module.exports = {
	findAll: function(dbcfg,cb) {
		console.log('inputData.findall')
		mongo.connect(dbcfg.url, function(err, db) {
			db.collection('inputData').find().toArray(function(err,docs) {
				cb(null,docs)
				db.close()
			})
		})
	}
}