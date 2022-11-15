import React from 'react'
import styles from "../style/endgame.module.css"

const PlayAgain = () => {

    const playAgain = () => {
        window.location.reload(true);
    }

    return (
        <div className={styles.boardFoot}>
            <button onClick={playAgain} className={styles.playAgainBtn}>Play Again?</button>
        </div>
    )
}

export default PlayAgain