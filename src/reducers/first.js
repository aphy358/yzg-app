import { handleActions } from 'redux-actions'

const initialState = { count: 10 }

export const counter = handleActions({
    'increase'(state, action) {
        const count = state.count
        return { count: count + 1 }
    },
}, initialState)