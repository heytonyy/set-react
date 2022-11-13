import React from "react"
import styles from "../style/endgame.module.css"

const Leaderboard = () => {
    return (
        <div className={styles.boardFoot}>
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
        </div>
    )
}

export default Leaderboard