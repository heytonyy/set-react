import React, { useContext } from "react"
import { useCountdown } from "../hooks/useCountdown"
import { GameContext } from "../context/GameContext"
import DateTimeDisplay from "./DateTimeDisplay"
import styles from "../style/timer.module.css"


const ShowCounter = ({ minutes, seconds, turnRed }) => {
  return (
    <div className={styles.showCounter}>
        <DateTimeDisplay value={minutes} isDanger={turnRed}  />
        :
        <DateTimeDisplay value={seconds} isDanger={turnRed} />
    </div>
  )
}


const Timer = ({ targetDate }) => {
  const [minutes, seconds] = useCountdown(targetDate);
  const { gameStart, setGame } = useContext(GameContext)

  if (minutes + seconds <= 0) {
    return setGame() // this means the games over, board disappears, go to endGame view
  } else {
    if (seconds < 10 && minutes === 0){
      const withPreZero = `0${seconds}`
      const noMinutes = ''
      return (
        <ShowCounter minutes={noMinutes} seconds={withPreZero} turnRed={seconds < 10}/>
      )
    } else if (minutes === 0) {
      const noMinutes = ''
      return (
        <ShowCounter minutes={noMinutes} seconds={seconds} turnRed={false}/>
      )
    } else if (seconds < 10) {
      const withPreZero = `0${seconds}`
      return (
        <ShowCounter minutes={minutes} seconds={withPreZero} turnRed={false}/>
      )
    } else {
      return (
        <ShowCounter minutes={minutes} seconds={seconds} turnRed={false}/>
      )
    }
  }
}

export default Timer

// For ref: https://blog.greenroots.info/how-to-create-a-countdown-timer-using-react-hooks