import React, { useState } from "react"
import styles from "../style/game.module.css"
import "../style/var.css"

const Header = ({ setTheme }) => {
    const [btnText, setBtnText] = useState('🌚')

    const toggleTheme = () => {
        if (btnText === '🌚') {
            setBtnText('🌝')
            setTheme('dark')
        } else {
            setBtnText('🌚')
            setTheme('light')
        }
    }

    return (
        <div className={styles.header}>
            <p className={styles.headerTitle}>SET</p>
            <button onClick={toggleTheme} className={styles.themeBtn}>{btnText}</button>
        </div>
    )
}

export default Header