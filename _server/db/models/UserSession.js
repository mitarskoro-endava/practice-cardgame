const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSessionSchema = new Schema({
	userID: { type: Schema.Types.ObjectId, required: true },
	expires: { type: Date, default: Date.now() + 24 * 60 * 60 * 1000 }
});

module.exports = mongoose.model("UserSession", UserSessionSchema);
