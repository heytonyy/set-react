import React, { useState, useEffect } from "react"
import Game from "./Game"
import EndGame from "./EndGame"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Rules from "../components/Rules"
import GameWrapper from "./GameWrapper"
import { GameProvider } from "../context/GameContext"
import RulesWrapper from "./RulesWrapper"

const Main = () => {
  // state to know when to switch to EndGame view
  const [showEndGame, setShowEndGame] = useState(false)
  const [theme, setTheme] = useState('light')

  useEffect(() => {
      document.body.className = theme;
  }, [theme])

  return (
    <GameProvider>
      <GameWrapper>
        <Header setTheme={setTheme}/>
        {
          !showEndGame ? <Game setShowEndGame={setShowEndGame} /> : <EndGame />
        }
        <Footer />
      </GameWrapper>
      <RulesWrapper>
        {
          !showEndGame && <Rules />
        }
      </RulesWrapper>
    </GameProvider >
  )
}

export default Main