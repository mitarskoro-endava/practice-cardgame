module.exports = {
    dbSave: (res, response, filter = f => f) => {
        return res
            .save()
            .then(filter)
            .then(doc => response.status(200).json(doc))
            .catch(err => res.status(400).json({ error: err }));
    },
    validate24h: timestamp => Date.now() - timestamp < 24 * 60 * 60 * 1000
};
