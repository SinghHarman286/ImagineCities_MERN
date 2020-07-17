var express = require("express"),
	app 	= express()


app.get("/", function(req, res) {
	res.send("This is the imagine Cities 'Home page'");
})

app.get("/about", function(req, res) {
	res.send("This is the imagine Cities 'About Page'");
})

app.get("/ourwork", function(req, res) {
	res.send("This is the imagine Cities 'OurWork page' ");
})

app.listen(3000);

app.get("/getinvolved", function(req, res) {
	res.send("This is the imagine Cities 'getinvolved page' ");
})

app.get("/contactus", function(req, res) {
	res.send("This is the imagine Cities 'contactus page' ");
})


	