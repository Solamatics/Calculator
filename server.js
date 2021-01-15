const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/bmiCalculator.html');
});


app.post('/', function(req, res) {

	var bodyHeight = Number(req.body.height);
	var bodyWeight = Number(req.body.weight);

	var result = bodyHeight + bodyWeight;

	res.send("Your BMI is " + result);
});

app.listen(3030, function() {
	console.log('Server is running at port 3030');
})

