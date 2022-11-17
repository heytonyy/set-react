import React, { useState, useEffect } from "react"
import styles from "../style/game.module.css"
import ShapeSVG from "./ShapeSVG"
import useGame from "../context/GameContext"
import "animate.css"

const Card = ({ card }) => {
    const { selectedCards, toggleSelectCard, deck } = useGame()

    const [isActive, setActive] = useState(false)
    const [isBlinking, setBlinking] = useState(false)
    const [deckCheck, setDeckCheck] = useState(deck.length) // used to clear isActive when board is reset

    useEffect(() => {
        // 1.5 sec delay to match up with updateBoard --> clears isActive
        if (selectedCards.length === 3) {
            setBlinking(isActive) // turn on blinking
            setTimeout(()=> {
                if (isActive) {
                    setActive(false)
                    setBlinking(false) // turn off blinking
                }
            }, 1500)
        }
        // true if board was reset --> clears isActive
        if (deckCheck > deck.length) {
            if (isActive) {
                setActive(false)
            }
            setDeckCheck(deck.length)
        }
    }, [selectedCards])

    const onCardClick = (card, e) => {
        if (selectedCards.length < 3) {
            if (e.target.classList[1].includes("selected")) {
                toggleSelectCard(card, "REMOVE")
            } else {
                toggleSelectCard(card, "ADD")
            }
            setActive(!isActive)
        }
    }

    return (
        <div className={styles.card}>
            {/* div overlay with z-index=1, since below is a composite element */}
            <div onClick={(e) => onCardClick(card, e)}
                className={`${styles.clickOverlay} ${isActive ? styles.selected : null} ${isBlinking ? 'animate__animated animate__flash' : null}`}>
            </div>
            {/* content consists of SVG of shapes (which is composed of a viewbox, path, and fill pattern) */}
            <div className={styles.cardContent}>
                {
                    // repeats for the number of shapes... cool trick, thanks stacks over flow!
                    [...Array(card.number)].map((_, i) => <ShapeSVG card={card} key={i} />)
                }
            </div>
        </div>
    )
}

export default Card