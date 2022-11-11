import React, { useEffect } from "react"
import NewCard from "./NewCard"
import styles from "../style/board.module.css"
import useGame from "../context/NewGameContext"

const NewBoard = () => {
    const { gameStart, boardCards, selectedCards, message, updateBoard } = useGame()

    useEffect(() => {
        updateBoard()
    }, [selectedCards])
    
    return (
        <>
            <div className={styles.message}>
                {
                    message
                }
            </div>
            <div className={styles.board}>
                <br />
                {
                    boardCards.map((card, i) => <NewCard key={i} card={card} />)
                }
            </div>
        </>
    )
}

export default NewBoard