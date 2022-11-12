import React, { useEffect } from "react"
import Card from "./Card"
import styles from "../style/board.module.css"
import useGame from "../context/GameContext"

const Board = () => {
    const { gameStart, boardCards, selectedCards, message, updateBoard } = useGame()

    useEffect(() => {
        if (selectedCards.length === 3) {
            updateBoard()
        }
    }, [selectedCards, gameStart])
    
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
                    gameStart && boardCards.map((card, i) => <Card key={i} card={card} />)
                }
            </div>
        </>
    )
}

export default Board