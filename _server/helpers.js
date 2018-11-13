module.exports = {
	validate24h: timestamp => timestamp - Date.now() < 24 * 60 * 60 * 1000,
	dbSave: resource => (response, filter = f => f) => {
		return resource
			.save()
			.then(filter)
			.then(doc => response.status(200).json(doc))
			.catch(err => response.status(400).json({ error: err._message }));
	},
	extract: (pattern, merge = {}) => document => {
		return new Promise(res => {
			let result = document;
			if (pattern.constructor === Array) {
				result = pattern.reduce((sum, e) => {
					if (typeof e === "string") sum[e] = document._doc[e];
					else if (typeof e === "object" && e !== null) {
						sum[Object.keys(e)[0]] = document._doc[e[Object.keys(e)[0]]];
					}
					return sum;
				}, {});
			} else if (typeof pattern === "object" && pattern !== null) {
				result = Object.keys(pattern).reduce((sum, e) => {
					sum[e] = document._doc[pattern[e]];
					return sum;
				}, {});
			}
			res({ ...result, ...merge });
		});
	}
};
