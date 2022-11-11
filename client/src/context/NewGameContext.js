import { createContext, useContext, useReducer } from "react"
import { gameReducer, initialState } from "./gameReducer"

export const GameContext = createContext(initialState)

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, initialState)

    const toggleStart = () => {
        const toggle = !state.gameStart
        dispatch({
            type: 'TOGGLE_START',
            payload: {
                gameStart: toggle
            }
        })
    }

    const sorryGameOver = () => {
        dispatch({
            type: 'GAME_OVER',
            payload: {
                gameOver: true
            }
        })
    }

    const loadDeck = (cards) => {
        const filledDeck = cards
        dispatch({
            type: 'LOAD_DECK',
            payload: {
                deck: filledDeck
            }
        })
    }

    const setBoard = () => {
        const newDeck = state.deck
        const updatedBoard = newDeck.splice(0, 12)
        dispatch({
            type: 'SET_BOARD',
            payload: {
                deck: newDeck,
                boardCards: updatedBoard
            }
        })
    }

    const toggleSelectCard = (card, action) => {
        const newSelected = state.selectedCards
        if (action === 'ADD') {
            newSelected.push(card)
        } else if (action === 'REMOVE') {
            newSelected.filter(p => card._id !== p._id)
        } else {
            throw new Error(`No action for ${action} in selecting cards.`)
        }
        dispatch({
            type: 'SELECT_CARD',
            payload: {
                selectedCards: newSelected
            }
        })
    }

    const updateBoard = () => {
        if (state.selectedCards === 3) {
            const newSelected = state.selectedCards
            const newMessage = state.message
            const ogScore = state.score // to calc diff
            const newScore = state.score
            const failed = []
            // check for failed set properties
            if (setTest(newSelected, 'number')) {
                failed.push(setTest(newSelected, 'number'))
            }
            if (setTest(newSelected, 'color')) {
                failed.push(setTest(newSelected, 'color'))
            }
            if (setTest(newSelected, 'fill')) {
                failed.push(setTest(newSelected, 'fill'))
            }
            if (setTest(newSelected, 'shape')) {
                failed.push(setTest(newSelected, 'shape'))
            }
            if (failed.length === 0) {
                newScore++
                newMessage += `Great job! That's a set!`
            } else {
                newMessage += `FAILED THE FOLLOWING: ${failed}`
            }
            dispatch({
                type: 'CHECK_FOR_SET',
                payload: {
                    score: newScore,
                    message: newMessage,
                }
            })
            // 1 second delay
            setTimeout(() => {
                const deckCopy = state.deck
                const boardCopy = state.boardCards
                let newBoard = []
                let newDeck = []
                if (ogScore !== newScore) {
                    newBoard = boardCopy.filter(card => !newSelected.includes(card))
                    const top3Cards = deckCopy.slice(0, 3)
                    newBoard = [...newBoard, ...top3Cards]
                    newDeck = deckCopy
                } else {
                    newBoard = boardCopy
                    newDeck = deckCopy
                }
                dispatch({
                    type: 'UPDATE_BOARD',
                    payload: {
                        deck: newDeck,
                        selectedCards: [],
                        boardCards: newBoard,
                        message: ''
                    }
                })
            }, 1000)
        }
    }
    // returns a string of the prop(s) that dont pass the set test, returns false if passed
    const setTest = (cards, prop) => {
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

    const gameControls = {
        deck: state.deck,
        boardCards: state.boardCards,
        selectedCards: state.selectedCards,
        score: state.score,
        message: state.message,
        toggleStart,
        sorryGameOver,
        loadDeck,
        setBoard,
        toggleSelectCard,
        updateBoard
    }
    return (
        <GameContext.Provider value={gameControls}>
            {children}
        </GameContext.Provider>
    )
}

// error checking to make sure to have context
const useGame = () => {
    const context = useContext(GameContext)
    if (context === undefined) {
        throw new Error('useGame must be used within game context')
    }
    return context
}

export default useGame





// Inpiration - https://www.youtube.com/watch?v=awGFsGc9oCM