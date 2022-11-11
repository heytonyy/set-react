import { createContext, useReducer } from "react"

export const GameContext = createContext()

export const GAME_ACTIONS = {
    SHUFFLE_DECK: 'shuffle-deck',
    SET_BOARD: 'set-board',
    SELECT_CARD: 'select-card',
    CHECK_FOR_SET: 'check-for-set',
    ADD_THREE_CARDS: 'add-three-cards'
}

export const gameReducer = (type, action) => {
    const {type, payload} = action
    switch (type) {
        case GAME_ACTIONS.SHUFFLE_DECK: {
            return payload // shuffle the deck payload when using dispatch
        }
        case GAME_ACTIONS.SET_BOARD: {
            return payload //
        }
        case GAME_ACTIONS.SELECT_CARD: {
            return payload //
        }
        case GAME_ACTIONS.CHECK_FOR_SET: {
            return payload //
        }
        case GAME_ACTIONS.ADD_THREE_CARDS: {
            return payload //
        }
        default: {
            throw new Error('Not a type in reducer.') //
        }
    }
}

export const GameContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(gameReducer, {})

    return (
        <GameContextProvider values={{ state, dispatch }}>
            { children }
        </GameContextProvider>
    )
}
