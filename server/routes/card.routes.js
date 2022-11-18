const CardController = require("../controllers/card.controllers")

module.exports = app => {
    // create card
    app.post("/api/cards/new", CardController.createCard);

    // read all
    app.get("/api/cards/", CardController.getAllCards);
}