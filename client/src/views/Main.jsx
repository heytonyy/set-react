import React from "react"
import Footer from "../components/Footer"
import Game from "../components/Game"
import Header from "../components/Header"
import Rules from "../components/Rules"
import Leaderboard from "./Leaderboard"
import useGame, { GameProvider } from "../context/GameContext"

const Main = () => {
  const { gameOver } = useGame()

  return (
    <>
      <Header />
      <GameProvider>
        {
          !gameOver ? <Game /> : <Leaderboard />
        }
      </GameProvider>
      <Footer />
      <Rules />
    </>
  )
}

export default Main