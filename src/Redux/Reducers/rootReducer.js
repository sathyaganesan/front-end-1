import { combineReducers } from 'redux'
import { getRecipesReducer } from './getRecipesReducer'
import { deleteRecipesReducer } from './deleteRecipeReducer'
import { editRecipesReducer } from './editRecipeReducer'
import { searchRecipesReducer } from './searchRecipesReducer'

export const rootReducer = combineReducers({
  get: getRecipesReducer,
  delete: deleteRecipesReducer,
  edit: editRecipesReducer,
  search: searchRecipesReducer
})