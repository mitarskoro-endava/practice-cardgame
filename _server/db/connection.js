const mongoose = require("mongoose");
const dbUrl = require("../../config").dbUrl;

//Connect to mongodb
mongoose.connect(
    dbUrl,
    { useNewUrlParser: true }
);
mongoose.connection.once("open", () => {
    console.log("Connection to mongoDB succesful.");
});
mongoose.connection.on("error", console.log);

module.exports = mongoose.connection;
