import React from 'react'
import styles from '../style/game.module.css'

const GameWrapper = ({ children }) => {

    return (
        <div className={styles.gameWrapper}>
            {children}
        </div>
    )
}

export default GameWrapper