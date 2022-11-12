import React, { memo } from "react"
import { useCountdown } from "../hooks/useCountdown"
import useGame from "../context/GameContext"
import styles from "../style/board.module.css"

const ShowCounter = ({ minutes, seconds, turnRed }) => {
  return (
    <div className={turnRed ? styles.danger : null}>
        {minutes}<span>:</span>{seconds}
    </div>
  )
}

const Timer = ({ targetDate }) => {
  const [minutes, seconds] = useCountdown(targetDate);
  const { sorryGameOver } = useGame()

  if (minutes + seconds <= 0) {
    return sorryGameOver()
  } else {
    if (seconds < 10 && minutes === 0) {
      const withPreZero = `0${seconds}`
      const noMinutes = ''
      return (
        <ShowCounter minutes={noMinutes} seconds={withPreZero} turnRed={minutes === 0} />
      )
    } else if (minutes === 0) {
      const noMinutes = ''
      return (
        <ShowCounter minutes={noMinutes} seconds={seconds} turnRed={minutes === 0} />
      )
    } else if (seconds < 10) {
      const withPreZero = `0${seconds}`
      return (
        <ShowCounter minutes={minutes} seconds={withPreZero} turnRed={false} />
      )
    } else {
      return (
        <ShowCounter minutes={minutes} seconds={seconds} turnRed={false} />
      )
    }
  }
}

export default Timer

// For ref: https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks