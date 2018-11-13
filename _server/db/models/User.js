const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	userName: { type: String, required: true },
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	isActive: { type: Boolean, defualt: true },
	verified: { type: Boolean, default: false },
	status: { type: String, default: "Online" }
});

module.exports = mongoose.model("User", UserSchema);
