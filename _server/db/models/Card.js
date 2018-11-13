const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
	name: { type: String, required: true },
	desc: { type: String, default: "" },
	level: { type: Number, required: true },
	cost: { type: Number, required: true },
	tags: [String],
	type: { type: String, required: true },
	effect: {
		attack: { type: Number, default: 0 },
		defense: { type: Number, default: 0 },
		magicDefense: { type: Number, default: 0 },
		health: { type: Number, default: 0 },
		size: { type: Number, default: 0 }
	},
	monster: { type: Schema.Types.ObjectId }
});

module.exports = mongoose.model("Card", CardSchema);
