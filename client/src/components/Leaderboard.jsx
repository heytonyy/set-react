import React from "react"
import styles from "../style/endgame.module.css"
import ScoreCard from "./ScoreCard"

const Leaderboard = () => {

    // fetch leaderboard from api and fill table
    // conditionally render the ScoreCard if they made the top 10

    return (
        <div className={styles.boardHead}>
            <h2>Leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Initials</th>
                        <th>Sets</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>11-12-22</td>
                        <td>TA</td>
                        <td>7</td>
                    </tr>
                </tbody>
            </table>
            <ScoreCard />
        </div>
    )
}

export default Leaderboard