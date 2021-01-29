import { GET_RECIPES_REQUEST, GET_RECIPES_SUCCESS, GET_RECIPES_FAILURE } from '../Actions/getRecipesActions'

const initialState = {
  loading: false,
  recipes: [],
  error: ''
}

export const getRecipesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPES_REQUEST:
      return {
        ...state,
        loading: true
      }
      case GET_RECIPES_SUCCESS:
        return {
          ...state,
          loading: false,
          recipes: action.payload
        }
        case GET_RECIPES_FAILURE:
          return {
            ...state,
            loading: false,
            recipes: [],
            error: action.payload
          }
          default:
            return state
  }
}