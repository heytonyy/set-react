export const initialState = {
    gameStart: false,
    gameOver: false,
    deck: [],
    boardCards: [],
    selectedCards: [],
    score: 0,
    message: '',
    messageColor: false,
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
                boardCards: payload.boardCards,
                selectedCards: payload.selectedCards
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
                message: payload.message,
                messageColor: payload.messageColor
            }
        }
        case 'UPDATE_BOARD': {
            return {
                ...state,
                deck: payload.deck,
                selectedCards: payload.selectedCards,
                boardCards: payload.boardCards,
                message: payload.message,
                messageColor: payload.messageColor
            }
        }
        default: {
            throw new Error(`No case for ${type} in gameReducer`)
        }
    }
}

