import {  DELETE_RECIPE_FAILURE, DELETE_RECIPE_REQUEST, DELETE_RECIPE_SUCCESS } from '../Actions/deleteRecipeActions'

const initialState = {
  loading: false,
  recipes: [],
  error: ''
}

export const deleteRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_RECIPE_REQUEST:
      return {
        ...state,
        loading: true
      }
      case DELETE_RECIPE_SUCCESS:
        return {
          ...state,
          loading: false
        }
        case DELETE_RECIPE_FAILURE:
          return {
            ...state,
            error: action.payload
          }
          default:
            return state
  }
}