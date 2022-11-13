import React from "react"
import styles from "../style/game.module.css"
import Timer from "./Timer"
import useGame from "../context/GameContext"

const BoardMenu = () => {
  const { gameStart, gameOver, deck, score, setBoard, toggleStart, sorryGameOver } = useGame()

  const startGame = () => {
    toggleStart()
    setBoard()
  }

  // end condition for running out of cards
  const drawFromDeck = () => {
    if (deck.length > 0) {
      setBoard()
    } else {
      sorryGameOver()
    }
  }

  return (
    <div className={styles.menu}>
      {/* GAME BUTTON -- conditionally rendered based off gameStart */}
      {
        (gameStart && !gameOver) ? <button onClick={drawFromDeck} className={styles.menuBtn}>New Board</button>
          : <button onClick={startGame} className={styles.menuBtn}>Start</button>
      }

      {/* DECK TOTAL */}
      <div className={styles.menuItem}>
        <strong>Deck</strong>
        <p>{deck ? deck.length : 81}/81</p>
      </div>

      {/* TIMER */}
      <div className={styles.menuItem}>
        <strong>Time</strong>
        {
          (gameStart && !gameOver) ? <Timer /> : <p>10:00</p>
        }
      </div>

      {/* SCORE */}
      <div className={styles.menuItem}>
        <strong>Sets</strong>
        <p>{score}</p>
      </div>
    </div>
  )
}

export default BoardMenu