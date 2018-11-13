//  Dependancies
const { Router } = require("express");
const Monster = require("../db/models/Monster");
const helpers = require("../helpers");

router = new Router();

router.get("/:id", (req, res) => {
	Monster.find({ name: req.params.id }).then(data =>
		res.status(200).json(data)
	);
});

router.get("/", (req, res) => {
	Monster.find().then(data => res.status(200).json(data));
});

module.exports = router;
