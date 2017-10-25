var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

router.post('/', function(req, res, next) {
	var pbody = req.body
	input_string = "[" + pbody.input.join(", ") + "]"
	console.log(pbody.input)

	var options = {
		pythonPath: '//anaconda/bin/python',
		scriptPath: './tensorflow',
		args: ['--user_input=' + pbody.input]
	};
	PythonShell.run('test.py', options, function (err, results) {
		if (err) { throw err; }
    	// results is an array consisting of messages collected during execution
    	console.log('results: %j', results);
			res.status(200).json({
				"success": true,
				"payload": {
					"value": parseInt(results[0])
				}
			});
			// res.status(200).send(parseInt(results[0]))
    }
	);
});

module.exports = router;
