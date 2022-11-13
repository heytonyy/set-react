import React from 'react'
import styles from '../style/game.module.css'

export const CenterWrapper = ({children}) => {
  return (
    <div className={styles.centerContent}>
        {children}
    </div>
  )
}