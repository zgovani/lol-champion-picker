var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

router.post('/', function(req, res, next) {
	var pbody = req.body
	console.log(pbody.input)
	var options = {
		args: ['--user_input=' + pbody.input]
	};
	PythonShell.run('../../tensorflow/model.py', options, function (err, results) {
		if (err) { throw err; }
    	// results is an array consisting of messages collected during execution
    	console.log('results: %j', results);
	});
	res.send('respond with a resource');
});

module.exports = router;