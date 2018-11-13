//  Dependancies
const { Router } = require("express");
const path = require("path");
const url = require("url");
const Session = require("../db/models/UserSession");
const User = require("../db/models/User");
const helpers = require("../helpers");
const validate24h = helpers.validate24h;
const dbSave = helpers.dbSave;
const extract = helpers.extract;

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
			const token = req.get("token");
			if (token) {
				Session.findById(token, (err, session) => {
					if (!err) {
						session
							? User.findByIdAndUpdate(session.userID, {
									$set: { status: "Offline" }
							  }).then(user => {
									session.remove().then(() => {
										res.status(200).json({ message: "Successs" });
									});
							  })
							: res.status(400).json({ error: "Invalid token" });
					} else res.status(500);
				});
			} else res.status(406).json({ error: 'No "token" header supplied' });
		default:
			res.status(500).json({ error: "Authentication handler error." });
	}
});

module.exports = router;
