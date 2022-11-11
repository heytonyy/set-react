import React, { useState, useEffect, } from "react"
import Board from "./Board"
import BoardMenu from "./BoardMenu"
import axios from "axios"
import { GameContext } from "../context/GameContext"

const Game = () => {
  const [deck, setDeck] = useState(null)
  const [boardCards, setBoardCards] = useState(null)
  const [score, setScore] = useState(0)

  const [gameStart, setGameStart] = useState(false)

  const setGame = () => {
    setGameStart(!gameStart)
  }

  const startGame = () => {
    // shuffle deck with all cards
    const newDeck = shuffle(deck)
    const newGameBoard = newDeck.splice(0, 12)
    setBoardCards(newGameBoard)
    setDeck(newDeck)
    // turns on game
    setGame()
  }

  // adds new cards from the deck to the board
  const newBoard = () => {
    const newDeck = deck
    const newGameBoard = newDeck.splice(0, 12)
    setBoardCards(newGameBoard)
    setDeck(newDeck)
  }

  // fetches cards from DB, shuffles, and then saved to state
  useEffect(() => {
    axios.get("http://localhost:8000/api/cards/")
      .then(res => {
        const shuffledRes = shuffle(res.data)
        setDeck(shuffledRes)
      })
      .catch(err => console.log(err))
  }, [])

  // shuffle algorithm
  const shuffle = (array) => {
    let currentIndex = array.length, randomIndex
    // while there remain elements to shuffle.
    while (currentIndex !== 0) {
      // pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex)
      currentIndex--
      // swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
    }
    return array
  }

  return (
    <>
      <GameContext.Provider value={{ gameStart, setGame }}>
        <BoardMenu startGame={startGame} newBoard={newBoard} deck={deck} score={score} />
        <Board currentCards={boardCards} setBoardCards={setBoardCards} setScore={setScore} score={score} />
      </GameContext.Provider>
    </>
  )
}

export default Game