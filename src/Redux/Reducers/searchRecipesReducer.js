import { SEARCH_RECIPE } from '../Actions/searchRecipesActions'

const initialState = {
  loading: false,
  recipes: [],
  error: ''
}


export const searchRecipesReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case SEARCH_RECIPE:
      return {
        ...state,
        recipes: actions.payload
      }
      default:
        return state
  }
}