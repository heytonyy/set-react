import React from "react"
import styles from "../style/rules.module.css"
import ShapeSVG from "./ShapeSVG"

const RulesExample = ({ card }) => {

    return (
        <div className={styles.card}>
            {/* div overlay with z-index=1, since below is a composite element */}
            <div className={styles.clickOverlay} >&nbsp;</div>
            {/* content consists of SVG of shapes (which is composed of a viewbox, path, and fill pattern) */}
            <div className={styles.cardContent}>
                {
                    // repeats # of shapes, thanks stacks over flow!
                    [...Array(card.number)].map( (e, i) => <ShapeSVG card={card} key={i}/>)
                }
            </div>
        </div>
    )
}

export default RulesExample