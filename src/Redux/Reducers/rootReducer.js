import { combineReducers } from 'redux'
import { getRecipesReducer } from './getRecipesReducer'

export const rootReducer = combineReducers({
  get: getRecipesReducer
})