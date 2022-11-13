import React from "react"
import BoardMenu from "./BoardMenu"
import LoadDeck from "./LoadDeck"
import Board from "./Board"

const Game = () => {

  return (
    <>
        <LoadDeck />
        <BoardMenu />
        <Board />
    </>
  )
}

export default Game