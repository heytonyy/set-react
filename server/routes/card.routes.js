const CardController = require('../controllers/card.controllers')

module.exports = app => {
    // read all
    app.get("/api/cards/", CardController.getAllCards);
}