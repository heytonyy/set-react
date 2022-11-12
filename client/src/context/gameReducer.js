export const initialState = {
    startTime: {},
    gameStart: false,
    gameOver: false,
    deck: [],
    boardCards: [],
    selectedCards: [],
    score: 0,
    message: ''
}

export const gameReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'TOGGLE_START': {
            return {
                ...state,
                gameStart: payload.gameStart
            }
        }
        case 'GAME_OVER': {
            return {
                ...state,
                gameOver: payload.gameOver,
                gameStart: payload.gameStart
            }
        }
        case 'LOAD_DECK': {
            return {
                ...state,
                deck: payload.deck
            }
        }
        case 'SET_BOARD': {
            return {
                ...state,
                deck: payload.deck,
                boardCards: payload.boardCards
            }
        }
        case 'SELECT_CARD': {
            return {
                ...state,
                selectedCards: payload.selectedCards
            }
        }
        case 'CHECK_FOR_SET': {
            return {
                ...state,
                score: payload.score,
                message: payload.message
            }
        }
        case 'UPDATE_BOARD': {
            return {
                ...state,
                deck: payload.deck,
                selectedCards: payload.selectedCards,
                boardCards: payload.boardCards,
                message: payload.message
            }
        }
        default: {
            throw new Error(`No case for ${type} in gameReducer`)
        }
    }
}

