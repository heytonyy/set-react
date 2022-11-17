import React, { useRef, useEffect, useState } from "react"
import useGame from "../context/GameContext"
import styles from "../style/game.module.css"

const ShowCounter = ({ minutes, seconds, turnRed }) => {
  return (
    <div className={turnRed ? styles.danger : null}>
      {minutes}<span>:</span>{seconds}
    </div>
  )
}

const Timer = () => {
  const [timerMinutes, settimerMinutes] = useState(10)
  const [timerSeconds, settimerSeconds] = useState(0)
  const { sorryGameOver } = useGame()
  
  const startMinutes = 10
  const MINS_IN_MS = startMinutes * 60 * 1000 + 1000 // have to add 1 extra second?
  const NOW_IN_MS = new Date().getTime();
  const TARGET_TIME = NOW_IN_MS + MINS_IN_MS;

  let interval = useRef()

  const startTimer = () => {
    interval = setInterval(() => {
      const NOW = new Date().getTime()
      const DIFF = TARGET_TIME - NOW

      const minutes = Math.floor((DIFF % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((DIFF % (1000 * 60)) / 1000)

      if (DIFF < 0) {
        clearInterval(interval.current)
        sorryGameOver() // stops the game
      } else {
        settimerMinutes(minutes)
        settimerSeconds(seconds)
      }
    }, 1000)
  }

  useEffect(() => {
    startTimer()
    return () => {
      clearInterval(interval.current)
    };
  }, [])

  if (timerSeconds < 10 && timerMinutes === 0) {
    const withPreZero = `0${timerSeconds}`
    const noMinutes = ""
    return (
      <ShowCounter minutes={noMinutes} seconds={withPreZero} turnRed={timerMinutes === 0} />
    )
  } else if (timerMinutes === 0) {
    const noMinutes = ""
    return (
      <ShowCounter minutes={noMinutes} seconds={timerSeconds} turnRed={timerMinutes === 0} />
    )
  } else if (timerSeconds < 10) {
    const withPreZero = `0${timerSeconds}`
    return (
      <ShowCounter minutes={timerMinutes} seconds={withPreZero} turnRed={false} />
    )
  } else {
    return (
      <ShowCounter minutes={timerMinutes} seconds={timerSeconds} turnRed={false} />
    )
  }
}

export default Timer