const { Card } = require("../models/card.model")

// read all
module.exports.getAllCards = (req, res) => {
    Card.find()
        .then(results => res.json(results))
        .catch(err => res.json(err))
}

// create new card
module.exports.createCard = (req, res) => {
    Card.create(req.body)
        .then(results => res.json(results))
        .catch(err => res.json(err))
}