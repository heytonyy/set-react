import React, { useState } from "react"
import Game from "./Game"
import EndGame from "./EndGame"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Rules from "../components/Rules"
import Wrapper from "./Wrapper"
import { GameProvider } from "../context/GameContext"

const Main = () => {
  // state to know when to switch to EndGame view
  const [showEndGame, setShowEndGame] = useState(false)

  return (
    <Wrapper>
      <Header />
      <GameProvider>
        {
          !showEndGame ? <>
            <Game setShowEndGame={setShowEndGame} />
            <Footer />
            <Rules />
          </> : <>
            <EndGame />
            <Footer />
          </>
        }
      </GameProvider>
    </Wrapper>
  )
}

export default Main