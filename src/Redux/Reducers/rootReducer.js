import { combineReducers } from 'redux'
import { getRecipesReducer } from './getRecipesReducer'
import { deleteRecipesReducer } from './deleteRecipeReducer'

export const rootReducer = combineReducers({
  get: getRecipesReducer,
  delete: deleteRecipesReducer
})