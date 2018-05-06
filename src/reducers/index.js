import { combineReducers } from 'redux'
import * as first from './first'

const rootReducer = combineReducers({
    ...first
})

export default rootReducer
