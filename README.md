# SET
###### by: heytonyy

<br>
This is a full stack lite MongoDB/Express/ReactJS app that simulates a timed based card game of Set[^1]

I've always had a huge love for any sort of puzzle / problem / riddle / quirky-like games. I dont remember when I first learned about the game of Set, but I instantly fell in love with it. Occaionally I play the Daily Set[^2], but I hand the idea to make my own version after learning the ReactJS framework.

<br>

TODO:
1. Refactor game and have useContext for all Game data (deck, boarCards, score, selected cards)
2. Refactor and utilize useReducer to have switch cases for all the different actions of the gameContext
3. Make sure it works
4. Add more CSS style the selected cards when checking for set/CSS (blinking?) for cards entering/exting the board(swoosh in)
5. LEADERBOARD Component
    - Make scoreboard schema in mongodb
    - score: 3 initials (validate only 3, make caps)
    - should be an array of obj (initials, score)
    - only display top 10?
    - only add initials if beats the top 10
    - STRECH GOAL: button post to FB/twitter "I just played Set and got a score of: {score}. Play at <"this link">" or maybe a copy pasta box

<br>

References:

[^1]: [Set](https://en.wikipedia.org/wiki/Set_(card_game))

[^2]: [Daily Set] (http://www.setgame.com/set/puzzle)