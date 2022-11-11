import React from "react"
import NewBoardMenu from "./NewBoardMenu"
import LoadDeck from "./LoadDeck"
import NewBoard from "./NewBoard"
import { GameProvider } from "../context/NewGameContext"

const NewGame = () => {

  return (
    <>
      <GameProvider>
        <LoadDeck />
        <NewBoardMenu />
        <NewBoard />
      </GameProvider>
    </>
  )
}

export default NewGame