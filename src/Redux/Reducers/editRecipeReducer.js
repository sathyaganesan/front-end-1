import { EDIT_RECIPES_REQUEST, EDIT_RECIPES_SUCCESS, EDIT_RECIPES_FAILURE } from '../Actions/editRecipeActions'

const initialState = {
  loading: false,
  recipes: [],
  error: ''
}

export const editRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_RECIPES_REQUEST:
      return {
        ...state,
        loading: true
      }
      case EDIT_RECIPES_SUCCESS:
        return {
          ...state,
          loading: false,
          payload: action.payload
        }
        case EDIT_RECIPES_FAILURE:
          return {
            ...state,
            loading: false,
            error: action.payload
          }
          default:
            return state
  }
}