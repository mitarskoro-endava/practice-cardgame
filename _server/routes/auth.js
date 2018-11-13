//  Dependancies
const { Router } = require("express");
const path = require("path");
const url = require("url");
const Session = require("../db/models/UserSession");
const User = require("../db/models/User");
const validate24h = require("../helpers").validate24h;
const dbSave = require("../helpers").dbSave;
const extract = require("../helpers").extract;

router = new Router();

router.post("/", (req, res) => {
	const path = req.originalUrl.toLowerCase().replace(/^\/+|\/+$/g, "");
	switch (path) {
		case "signup":
			User.findOne({ email: req.body.email }, (err, user) => {
				if (!err) {
					if (user === null)
						dbSave(
							User({
								userName: req.body.userName,
								firstName: req.body.firstName,
								lastName: req.body.lastName,
								email: req.body.email,
								password: req.body.password
							})
						)(
							res,
							extract([
								"userName",
								"firstName",
								"lastName",
								{ id: "_id" },
								"verified",
								"email"
							])
						);
					else res.status(401).json({ error: "Email is already is use." });
				} else res.status(500);
			});
			break;
		case "login":
			User.findOne({ email: req.body.email }, (err, user) => {
				if (!err) {
					if (user) {
						if (user.password === req.body.password) {
							Session.findOne({ userID: user._id }, (err, session) => {
								if (!err && session && validate24h(session.expires)) {
									dbSave(session)(res, extract([{ token: "_id" }, "expires"]));
								} else if (!err && !session)
									dbSave(Session({ userID: user._id }))(
										res,
										extract([{ token: "_id" }, "expires"])
									);
								else res.status(500);
							});
						} else res.status(401).json({ error: "Incorrect password." });
					} else
						res.status(401).json({ error: "No account with such e-mail." });
				} else res.status(500);
			});
			break;
		case "logout":
			Session.findByIdAndRemove(req.body.token);
		default:
			res.status(500);
	}
});

module.exports = router;
