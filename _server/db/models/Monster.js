const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MonsterSchema = new Schema({
	name: { type: String, required: true },
	targetedAs: [String],
	attributes: {
		attack: { type: Number, default: 0 },
		range: { type: Number, default: 0 },
		defense: { type: Number, default: 0 },
		magicDefense: { type: Number, default: 0 },
		health: { type: Number, default: 0 },
		size: { type: Number, default: 0 }
	},
	modifiers: {
		attack: { type: Number, default: 0 },
		range: { type: Number, default: 0 },
		defense: { type: Number, default: 0 },
		magicDefense: { type: Number, default: 0 },
		health: { type: Number, default: 0 },
		size: { type: Number, default: 0 }
	},
	abilities: [Schema.Types.ObjectId],
	_id: { type: Schema.Types.ObjectId, select: false },
	__v: { type: Number, select: false }
});

module.exports = mongoose.model("Monster", MonsterSchema);
