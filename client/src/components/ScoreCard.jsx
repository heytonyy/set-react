import React, { useState, useEffect } from 'react'
import styles from '../style/endgame.module.css'
import useGame from '../context/GameContext'
import ScoreForm from './ScoreForm'

const ScoreCard = ({ showForm }) => {
    const [hasNotSubmited, setHasNotSubmited] = useState(true)
    const { score } = useGame()

    useEffect(() => {
      // re-render when form submitted
    }, [hasNotSubmited])
    
    return (
        <div className={styles.boardBody}>
            <div className={styles.card}>
                <div className={styles.score}>
                    Sets: {score}
                </div>
                {
                    (showForm && hasNotSubmited) && <ScoreForm setHasNotSubmited={setHasNotSubmited}/>
                }
            </div>
        </div>
    )
}

export default ScoreCard
