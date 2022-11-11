import React, { useEffect } from "react"
import styles from "../style/board.module.css"
import Timer from "./Timer"
import useGame from "../context/NewGameContext"

const BoardMenu = () => {
  const { toggleStart, gameStart, boardCards, deck, score, setBoard } = useGame()
  
  const startGame = () => {
    toggleStart()
    setBoard()
  }

  useEffect(()=> {
    setBoard()
  }, [gameStart])

  const numMinutes = 5
  const MINS_IN_MS = numMinutes * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const targetTime = NOW_IN_MS + MINS_IN_MS;

  return (
    <div className={styles.menu}>
      {/* GAME BUTTON -- conditionally rendered based off gameStart */}
      {
        gameStart ? <button onClick={setBoard} className={styles.menuBtn}>New Board</button>
          : <button onClick={startGame} className={styles.menuBtn}>Start</button>
      }

      {/* DECK TOTAL */}
      <div className={styles.menuText}>Deck: {deck ? deck.length : 81}/81</div>

      {/* TIMER */}
      {/* NEED TO FIX: Timer is reseting when you click new board or you get a set */}
      {
        gameStart && <Timer targetDate={targetTime} />
      }

      {/* SCORE */}
      <div className={styles.menuText}>Sets: {score}</div>
    </div>
  )
}

export default BoardMenu