const Card = require("./models/Card");
const Monster = require("./models/Monster");
const connection = require("./connection");

Monster({
	name: "Bear",
	targetedAs: [
		"Beast",
		"Living",
		"Monster",
		"Creature",
		"ForestCreature",
		"Animal"
	],
	attributes: {
		attack: 4,
		defense: 2,
		health: 8
	}
})
	.save()
	.then(creature => {
		Card({
			name: "Bear",
			level: 3,
			cost: 2,
			tags: ["Monster", "Beast", "Forest"],
			type: "Monster",
			monster: creature._id,
			imgPath: "unknown.png"
		})
			.save()
			.then(card => console.log("Done inserting bear card."));
	})
	.catch(err => console.log(err));
