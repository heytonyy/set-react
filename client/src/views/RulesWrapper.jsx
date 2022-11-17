import React from 'react'
import styles from '../style/game.module.css'

const RulesWrapper = ({ children }) => {

    return (
        <div className={styles.rulesWrapper}>
            {children}
        </div>
    )
}

export default RulesWrapper