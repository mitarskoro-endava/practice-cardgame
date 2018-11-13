const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSessionSchema = new Schema({
    userID: { type: Schema.Types.ObjectId, required: true },
    timestamp: { type: Date, default: Date.now() },
    valid: { type: Boolean, default: true }
});

module.exports = mongoose.model("UserSession", UserSessionSchema);
