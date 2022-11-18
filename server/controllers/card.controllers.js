const { Card } = require("../models/card.model")

// read all
module.exports.getAllCards = (req, res) => {
    Card.find()
        .then(results => res.json(results))
        .catch(err => res.json(err))
}