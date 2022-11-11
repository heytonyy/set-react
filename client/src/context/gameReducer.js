export const initialState = {
    gameStart: false,
    deck: [],
    boardCards: [],
    selectedCards: [],
    score: 0
}

export const gameReducer = (state, action) => {
    const { type, payload } = action
    switch (type) {
        case 'START_GAME': {
            console.log('START_GAME', payload)
            return {
                ...state,
                gameStart: payload.gameStart
            } // 
        }
        case 'LOAD_DECK': {
            console.log('LOAD_DECK', payload)
            return {
                ...state,
                deck: payload.deck
            } // 
        }
        case 'SHUFFLE_DECK': {
            console.log('SHUFFLE_DECK', payload)
            return {
                ...state,
                deck: payload.deck
            } // 
        }
        case 'SET_BOARD': {
            console.log('SET_BOARD', payload)
            return {
                ...state,
                deck: payload.deck,
                boardCards: payload.boardCards
            } // 
        }
        case 'SELECT_CARD': {
            console.log('SELECT_CARD', payload)
            return {
                ...state,
                selectedCards: payload.selectedCards
            } // 
        }
        case 'CHECK_FOR_SET': {
            console.log('CHECK_FOR_SET', payload)
            return {
                ...state,
                selectedCards: payload.selectedCards,
                boardCards: payload.boardCards,
                score: payload.score
            } // 
        }
        case 'ADD_THREE_CARDS': {
            console.log('ADD_THREE_CARDS', payload)
            return {
                ...state,
                deck: payload.deck,
                boardCards: payload.boardCards
            } // 
        }
        default: {
            throw new Error(`No case for ${type} in gameReducer`)
        }
    }
}

