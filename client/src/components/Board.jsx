import React, { useState, useContext, useEffect } from "react"
import Card from "./Card"
import styles from "../style/board.module.css"
import { GameContext } from "../context/GameContext"

const Board = ({ currentCards, setBoardCards, setScore, score }) => {
    const { gameStart } = useContext(GameContext)

    const [selectedCards, setSelectedCards] = useState([])
    const [message, setMessage] = useState(null)

    // returns a string of the prop that didnt pass the set prop test, returns null if passed
    const checkPropsForSet = (cards, prop) => {
        const propArr = [cards[0][prop], cards[1][prop], cards[2][prop]]
        if (prop === 'number') {
            const numSum = propArr.reduce((psum, el) => psum + el, 0)
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
        return null
    }

    // check for set ever times selectedCards updates (useEffect)
    useEffect(() => {
        if (selectedCards.length === 3) {
            // array to set to message
            const failed = []
            // check for failed set properties
            if (checkPropsForSet(selectedCards, 'number')) {
                failed.push(checkPropsForSet(selectedCards, 'number'))
            }
            if (checkPropsForSet(selectedCards, 'color')) {
                failed.push(checkPropsForSet(selectedCards, 'color'))
            }
            if (checkPropsForSet(selectedCards, 'fill')) {
                failed.push(checkPropsForSet(selectedCards, 'fill'))
            }
            if (checkPropsForSet(selectedCards, 'shape')) {
                failed.push(checkPropsForSet(selectedCards, 'shape'))
            }
            // zero fails means it was a set!
            if (failed.length === 0) {
                // get point
                const newScore = score + 1
                setScore(newScore)
                // success msg
                setMessage("Great job! That's a set!")
                // delete cards
                const remainingBoard = currentCards.filter(card => !selectedCards.includes(card))
                setBoardCards(remainingBoard)
            } else {
                setMessage(`FAILED THE FOLLOWING: ${failed}.`)
            }
            // delay
            setTimeout(() => {
                // clear state
                setSelectedCards([])
                setMessage(null)
            }, 1000)
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
                    message && <p>{message}</p>
                }
            </div>
            <div className={styles.board}>
                <br />
                {
                    gameStart && currentCards.map((p, i) => <Card key={i} card={p} selectedCards={selectedCards} selectedHandler={selectedHandler} />)
                }
            </div>
        </>
    )
}

export default Board