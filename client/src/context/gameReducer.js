export const initialState = {
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
            // console.log('TOGGLE_START', payload)
            return {
                ...state,
                gameStart: payload.gameStart
            }
        }
        case 'GAME_OVER': {
            // console.log('GAME_OVER', payload)
            return {
                ...state,
                gameOver: payload.gameOver,
                gameStart: payload.gameStart
            }
        }
        case 'LOAD_DECK': {
            // console.log('LOAD_DECK', payload)
            return {
                ...state,
                deck: payload.deck
            }
        }
        case 'SET_BOARD': {
            // console.log('SET_BOARD', payload)
            return {
                ...state,
                deck: payload.deck,
                boardCards: payload.boardCards
            }
        }
        case 'SELECT_CARD': {
            // console.log('SELECT_CARD', payload)
            return {
                ...state,
                selectedCards: payload.selectedCards
            }
        }
        case 'CHECK_FOR_SET': {
            // console.log('CHECK_FOR_SET', payload)
            return {
                ...state,
                score: payload.score,
                message: payload.message
            }
        }
        case 'UPDATE_BOARD': {
            // console.log('UPDATE_BOARD', payload)
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

