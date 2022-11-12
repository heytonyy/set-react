import React, { useEffect } from "react"
import styles from "../style/board.module.css"
import Timer from "./Timer"
import useGame from "../context/GameContext"

const BoardMenu = () => {
  const { gameStart, gameOver, toggleStart, deck, score, setBoard } = useGame()

  const startGame = () => {
    toggleStart()
    setBoard()
  }

  useEffect(() => {
    
  }, [gameStart, gameOver])
  

  const numMinutes = 1
  const MINS_IN_MS = numMinutes * 2 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const targetTime = NOW_IN_MS + MINS_IN_MS;

  return (
    <div className={styles.menu}>
      {/* GAME BUTTON -- conditionally rendered based off gameStart */}
      {
        (gameStart && !gameOver) ? <button onClick={setBoard} className={styles.menuBtn}>New Board</button>
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
          (gameStart && !gameOver) ? <Timer targetDate={targetTime} /> : <p>5:00</p>
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