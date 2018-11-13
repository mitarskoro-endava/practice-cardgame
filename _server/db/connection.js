const mongoose = require("mongoose");
const dbUrl = require("../../config").dbUrl;

//Connect to mongodb
mongoose.connect(
	dbUrl,
	{ useNewUrlParser: true, useFindAndModify: false }
);
mongoose.connection.once("open", err => {
	err
		? console.log("Error connecting: ", err)
		: console.log("Connection to mongoDB succesful.");
});
mongoose.connection.on("error", console.log);

module.exports = mongoose.connection;
