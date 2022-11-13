import React, { useEffect } from "react"
import BoardMenu from "../components/BoardMenu"
import LoadDeck from "../components/LoadDeck"
import Board from "../components/Board"
import useGame from "../context/GameContext"

const Game = ({ setShowEndGame }) => {
  const { gameOver } = useGame()

  useEffect(() => {
    // change to leaderboard form by passing gameOver Bool to Main.jsx to save to its state
    setShowEndGame(gameOver)
  }, [gameOver])

  return (
    <>
      <LoadDeck />
      <BoardMenu />
      <Board />
    </>
  )
}

export default Game