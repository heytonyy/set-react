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
                gameOver: true,
                gameStart: false
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
                boardCards: updatedBoard,
                selectedCards: [] // need to clear selected
            }
        })
    }

    const toggleSelectCard = (card, action) => {
        const selectedCopy = state.selectedCards
        let newSelected = []
        if (action === 'ADD') {
            newSelected = [...selectedCopy, card]
        }
        if (action === 'REMOVE') {
            newSelected = selectedCopy.filter(p => card._id !== p._id)
        }
        dispatch({
            type: 'SELECT_CARD',
            payload: {
                selectedCards: newSelected
            }
        })
    }

    const updateBoard = () => {
        const newSelected = state.selectedCards
        let newMessage = state.message
        const ogScore = state.score // to calc diff
        let newScore = state.score
        let newMessageColor = state.messageColor
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
            newMessageColor = true
        } else {
            newMessage += `FAILED THE FOLLOWING: ${failed}`
            newMessageColor = false
        }
        dispatch({
            type: 'CHECK_FOR_SET',
            payload: {
                score: newScore,
                message: newMessage,
                messageColor: newMessageColor
            }
        })
        // 2 second delay
        setTimeout(() => {
            let newBoard = state.boardCards
            let newDeck = state.deck
            if (ogScore !== newScore) {
                const boardCopy = newBoard
                let deckCopy = newDeck
                // newboard = remaining + top3 cards of deck
                const top3Cards = deckCopy.slice(0, 3)
                const remaining = boardCopy.filter(card => !newSelected.includes(card))
                newBoard = [...remaining, ...top3Cards]
                // remaining deck starts on card 4
                newDeck = deckCopy.slice(3)
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
        }, 2000)
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
        // shuffle algorithm
        const shuffle = (array) => {
            let currentIndex = array.length, randomIndex
            // while there remain elements to shuffle.
            while (currentIndex !== 0) {
                // pick a remaining element.
                randomIndex = Math.floor(Math.random() * currentIndex)
                currentIndex--
                // swap it with the current element.
                [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
            }
            return array
        }

    const gameControls = {
        gameStart: state.gameStart,
        gameOver: state.gameOver,
        deck: state.deck,
        boardCards: state.boardCards,
        selectedCards: state.selectedCards,
        score: state.score,
        message: state.message,
        messageColor: state.messageColor,
        toggleStart,
        sorryGameOver,
        loadDeck,
        setBoard,
        toggleSelectCard,
        updateBoard,
        shuffle
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