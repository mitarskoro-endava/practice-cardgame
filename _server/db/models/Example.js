const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exampleSchema = new Schema({
    Name: {
        type: String,
        required: true
    },
    Date: Date
});

const ExampleModel = mongoose.model("example", exampleSchema);

module.exports = ExampleModel;
