import React from 'react'
import styles from '../style/endgame.module.css'
import useGame from '../context/GameContext'

const StatsCard = () => {
    const { score } = useGame()

    return (
        <div className={styles.boardHead}>
            <div className={styles.card}>
                <span className={styles.cardContent}> Number of Sets: {score} </span>
            </div>
        </div>
    )
}

export default StatsCard