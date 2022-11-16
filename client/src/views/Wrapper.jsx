import React from 'react'
import styles from '../style/game.module.css'

const Wrapper = ({ children }) => {

    return (
        <div className={styles.wrapper}>
            {children}
        </div>
    )
}

export default Wrapper