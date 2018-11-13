const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    userName: { type: String, default: "" },
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, default: "" },
    password: { type: String, default: "" },
    isActive: { type: Boolean, defualt: true },
    verified: { type: Boolean, default: false },
    status: { type: String, default: "Online" }
});

module.exports = mongoose.model("User", UserSchema);
