import { combineReducers } from 'redux'
import filtroReducer from './filtroReducer'
import authReducer from './authReducer'
const mainReducer = combineReducers({

    filtroReducer,
    authReducer

})

export default mainReducer
