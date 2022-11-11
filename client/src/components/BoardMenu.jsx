import React, { useContext, useState } from "react"
import styles from "../style/board.module.css"
import Timer from "./Timer"
import { GameContext } from "../context/GameContext"

const BoardMenu = ({ startGame, newBoard, deck, score }) => {
  const { gameStart } = useContext(GameContext)

  const numMinutes = 5
  const MINS_IN_MS = numMinutes * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const targetTime = NOW_IN_MS + MINS_IN_MS;

  return (
    <div className={styles.menu}>
      {/* GAME BUTTON -- conditionally rendered based off gameStart */}
      {
        gameStart ? <button onClick={newBoard} className={styles.menuBtn}>New Board</button>
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
          gameStart ? <Timer targetDate={targetTime} /> : <p>5:00</p>
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