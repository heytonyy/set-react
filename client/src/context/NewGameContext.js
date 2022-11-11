import { createContext, useContext, useReducer } from "react"
import { gameReducer, initialState } from "./gameReducer"

export const GameContext = createContext(initialState)

export const GameProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, initialState)

    const toggleStart = () => {
        const toggle = !state.gameStart
        dispatch({
            type: 'START_GAME',
            payload: {
                gameStart: toggle
            }
        })
    }

    const loadDeck = (cards) => {
        const filledDeck = [...state.deck, cards]
        dispatch({
            type: 'LOAD_DECK',
            payload: {
                deck: filledDeck
            }
        })
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
    const shuffleDeck = () => {
        const shuffledDeck = shuffle(state.deck)
        dispatch({
            type: 'SHUFFLE_DECK',
            payload: {
                deck: shuffledDeck
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

    const selectCard = (card, action) => {
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


    
    const gameState = {
        deck: state.deck,
        boardCards: state.boardCards,
        selectedCards: state.selectedCards,
        score: state.score,
        toggleStart,
        loadDeck,
        setBoard,
        shuffleDeck,
        selectCard
    }
    return (
        <GameContext.Provider value={gameState}>
            {children}
        </GameContext.Provider>
    )
}


// dunno why we do this? rewatch video - https://www.youtube.com/watch?v=awGFsGc9oCM
const useGame = () => {
    const context = useContext(GameContext)
    if (context === undefined){
        throw new Error('useGame must be used within game context')
    }
    return context
}

export default useGame