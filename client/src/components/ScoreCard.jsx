import React, { useState } from 'react'
import styles from '../style/endgame.module.css'
import useGame from '../context/GameContext'

const ScoreCard = () => {
    const { score, deck } = useGame()
    const [initials, setInitials] = useState('')

    const formSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className={styles.boardBody}>
            <div className={styles.card}>
                <div className={styles.test}>
                    Sets: {score}
                </div>
                <div className={styles.cardTitle}>
                    You made it to the leaderbord!
                </div>
                {/* FORM */}
                <form onSubmit={formSubmit}>
                    <input onChange={(e) => setInitials(e.target.value)} value={initials} type="text" id="initials" placeholder="Initials"></input>
                    <input type="submit" value="Add" />
                </form>
            </div>
        </div>
    )
}

export default ScoreCard
