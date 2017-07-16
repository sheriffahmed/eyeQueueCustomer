var express = require("express"),
	bodyParser = require("body-parser"),
	hbs = require("hbs"),
	cors = require("cors")
	mongoose = require("mongoose"),
	app = express();

app.set("view engine", "hbs");

app.use(cors());
app.use(bodyParser.json());

app.get("/", function(req, res) {
	res.render("index");
});

app.get("/login", function(req, res) {
	res.render("login");
});

app.get("/signup", function(req, res) {
	res.render("signup");
});

app.get("/home", function(req, res) {
	res.render("home");
});

//json is being stored req.body: http://expressjs.com/en/api.html#req.body
app.post("/order", function(req, res) {
	console.log(req.body, "test");
	res.sendStatus(200);

});
mongoose.connect("mongodb://localhost/user");

app.listen(8080, function() {
	console.log("App is running!");
});