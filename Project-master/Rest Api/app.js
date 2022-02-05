const express = require("express");
require("dotenv").config();
const bodyParser = require("body-parser");
const student = require("./Routes/student");
const loginTable = require("./Routes/login");
const teacherTable = require("./Routes/teacher");
const courseTable = require("./routes/course");
const catTable = require("./routes/category");
const planner=require("./Routes/planner");
const entry =require("./Routes/entry");
const app = express();

//code for handling cors error
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Header",
		"Origin,X-Requested-Width,Content-Type,Accept,Authorization"
	);
	res.header("Access-Control-Allow-Credential", true);
	if (res.header === "OPTIONS") {
		res.header("Access-Control-Allow-Method", "PUT", "POST", "GET", "DELETE", "PATCH");
		return res.status(200).json();
	}
	next();
});

const morgan = require("morgan");
app.use(morgan("dev")); //use morgan to track log

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/entries", entry);
app.use("/students", student); //customize routing

app.use("/signin", loginTable);
app.use("/courses", courseTable);
app.use("/categories", catTable);
app.use("/planings", planner);
app.use("/teach", teacherTable);

app.use((req, res, next) => {
	const error = new Error();
	error.status(400);
	next(error);
});
app.use((error, req, res, next) => {
	res.status(error.status || 500);
	res.json({
		error: {
			message: error.message,
		},
	});
});

module.exports = app;
