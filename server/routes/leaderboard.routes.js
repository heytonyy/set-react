const LeaderboardController = require("../controllers/leaderboard.controllers")

module.exports = app => {
    // create
    app.post("/api/leaderboard/new", LeaderboardController.addToLeaderboard);
    // read all
    app.get("/api/leaderboard/", LeaderboardController.getLeaderboards);
}