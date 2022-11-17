import React, { useState, useEffect } from "react"
import styles from "../style/endgame.module.css"
import axios from "axios"
import useGame from "../context/GameContext"

const Leaderboard = ({ setWinnerInput }) => {
    const [leaderboard, setLeaderboard] = useState(null)
    const { score } = useGame()

    useEffect(() => {
        axios.get("http://localhost:8000/api/leaderboard/")
            .then(res => {
                const leaderboard = res.data
                setLeaderboard(leaderboard)
                // check to see if they are in top 8
                if (score > leaderboard[leaderboard.length - 1].score){
                    setWinnerInput(true)
                } else {
                    setWinnerInput(false)
                }
            })
            .catch(err => console.log(err))
    }, [leaderboard])

    return (
        <div className={styles.boardHead}>
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Initials</th>
                        <th>Sets</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        leaderboard && leaderboard.map((winner, index) => {
                            const {createdAt, initials, score} = winner
                            const date = new Date(createdAt)
                            const smolDate = date.toLocaleDateString()
                            return (
                                <tr key={index}>
                                    <td>{initials.toUpperCase()}</td>
                                    <td>{score}</td>
                                    <td>{smolDate}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Leaderboard