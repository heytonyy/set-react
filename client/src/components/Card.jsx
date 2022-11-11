import React from "react"
import { useState, useEffect } from "react"
import styles from "../style/board.module.css"
import ShapeSVG from "./ShapeSVG"

const Card = ({ card, selectedHandler, selectedCards }) => {
    const [isActive, setActive] = useState(false)

    // when 3 cards are selected, clears 'selected' class after 1sec delay
    useEffect(() => {
        if (selectedCards.length === 3) {
            setTimeout(()=> {
                if (isActive) {
                    setActive(false)
                }
            }, 1000)
        }
    }, [selectedCards])


    const onCardClick = (card, e) => {
        // this works but is there a better way?
        if (selectedCards.length < 3) {
            if (e.target.classList[1].includes("selected")) {
                selectedHandler(card, "remove")
                setActive(!isActive)
            } else {
                selectedHandler(card, "add")
                setActive(!isActive)
            }
        }
    }

    return (
        <div className={styles.card}>
            {/* div overlay with z-index=1, since below is a composite element */}
            <div onClick={(e) => onCardClick(card, e)}
                className={`${styles.clickOverlay} ${isActive ? styles.selected : null}`}>
            </div>
            {/* content consists of SVG of shapes (which is composed of a viewbox, path, and fill pattern) */}
            <div className={styles.cardContent}>
                {
                    // repeats for the number of shapes... cool trick, thanks stacks over flow!
                    [...Array(card.number)].map((e, i) => <ShapeSVG card={card} key={i} />)
                }
            </div>
        </div>
    )
}

export default Card