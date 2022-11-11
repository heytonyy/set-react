import React, { useState, useContext, useEffect } from "react"
import Card from "./Card"
import styles from "../style/board.module.css"
import { GameContext } from "../context/GameContext"

const Board = ({ currentCards, setBoardCards, setScore, score }) => {
    const { gameStart } = useContext(GameContext)

    const [selectedCards, setSelectedCards] = useState([])
    const [message, setMessage] = useState(null)

    // returns a string of the prop(s) that dont pass the set test, returns false if passed
    const checkForSet = (cards, prop) => {
        const propArr = [cards[0][prop], cards[1][prop], cards[2][prop]]
        if (prop === 'number') {
            const numSum = propArr.reduce((runningSum, el) => runningSum + el, 0)
            // validator --> sets only have a numSum of 3, 6 or 9
            if (!(numSum === 3 || numSum === 6 || numSum === 9)) {
                return ` ${prop}`
            }
        } else {
            const propDict = {}
            for (const prop of propArr) {
                (prop in propDict) ? propDict[prop]++ : propDict[prop] = 1
            }
            // validator --> sets only have 1 or 3 of the same props (keys in dict != 2)
            if (Object.keys(propDict).length === 2) {
                return ` ${prop}`
            }
        }
        return false
    }

    // check for set ever times selectedCards updates (useEffect)
    useEffect(() => {
        if (selectedCards.length === 3) {
            // array to set to message
            const failed = []
            let toDelete = false
            // check for failed set properties
            if (checkForSet(selectedCards, 'number')) {
                failed.push(checkForSet(selectedCards, 'number'))
            }
            if (checkForSet(selectedCards, 'color')) {
                failed.push(checkForSet(selectedCards, 'color'))
            }
            if (checkForSet(selectedCards, 'fill')) {
                failed.push(checkForSet(selectedCards, 'fill'))
            }
            if (checkForSet(selectedCards, 'shape')) {
                failed.push(checkForSet(selectedCards, 'shape'))
            }
            // zero fails means it was a set!
            if (failed.length === 0) {
                // get point
                const newScore = score + 1
                setScore(newScore)
                // success msg
                setMessage("Great job! That's a set!")
                // delete cards
                toDelete = true
            } else {
                setMessage(`NOT A SET BECAUSE: ${failed}.`)
            }
            // delay
            setTimeout(() => {
                // clear state
                const remainingBoard = toDelete ? currentCards.filter(card => !selectedCards.includes(card)) : currentCards
                setBoardCards(remainingBoard)
                setSelectedCards([])
                setMessage(null)
            }, 2000)
        }
    }, [selectedCards])

    const selectedHandler = (card, action) => {
        // card needs to be added
        if (action === 'add') {
            setSelectedCards([...selectedCards, card])
        }
        // card needs to be removed
        if (action === 'remove') {
            const removedState = selectedCards.filter(p => card._id !== p._id)
            setSelectedCards(removedState)
        }
    }

    return (
        <>
            <div className={styles.message}>
                {
                    message ? message : <>&nbsp;</>
                }
            </div>
            <div className={styles.board}>
                {
                    gameStart && currentCards.map((p, i) => <Card key={i} card={p} selectedCards={selectedCards} selectedHandler={selectedHandler} />)
                }
            </div>
        </>
    )
}

export default Board