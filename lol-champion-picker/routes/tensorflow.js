var express = require('express');
var router = express.Router();
var PythonShell = require('python-shell');

router.post('/', function(req, res, next) {
	var pbody = req.body
	input_string = "[" + pbody.input.join(", ") + "]"
	console.log(pbody.input)

	var options = {
<<<<<<< HEAD
=======
		pythonPath: '/Library/Frameworks/Python.framework/Versions/3.5/bin/python3',
>>>>>>> f3e56bfdc35992345756af14ba5d6c9731b5147f
		scriptPath: './tensorflow',
		args: ['--user_input=' + pbody.input]
	};
	PythonShell.run('model.py', options, function (err, results) {
		if (err) { throw err; }
    	// results is an array consisting of messages collected during execution
    	console.log('results: %j', results);
<<<<<<< HEAD
    });
	res.send('respond with a resource');
});

module.exports = router;
=======
			res.send(parseInt(results[0]));
    }
	);
});

module.exports = router;
>>>>>>> f3e56bfdc35992345756af14ba5d6c9731b5147f
