import React from "react"
import BoardMenu from "./BoardMenu"
import LoadDeck from "./LoadDeck"
import Board from "./Board"
import { GameProvider } from "../context/GameContext"

const Game = () => {

  return (
    <>
      <GameProvider>
        <LoadDeck />
        <BoardMenu />
        <Board />
      </GameProvider>
    </>
  )
}

export default Game