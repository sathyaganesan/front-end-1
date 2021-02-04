import { axiosWithAuth } from '../../Components/axiosWithAuth'

export const DELETE_RECIPE_REQUEST = "DELETE_RECIPE_REQUEST"
export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS"
export const DELETE_RECIPE_FAILURE = "DELETE_RECIPE_FAILURE"

export const deleteRecipeRequest = () => {
  return { 
    type: DELETE_RECIPE_REQUEST 
  }
}

export const deleteRecipeSuccess = () => {
  return {
    type: DELETE_RECIPE_SUCCESS
  }
}

export const deleteRecipeFailure = (error) => {
  return {
    type: DELETE_RECIPE_FAILURE,
    payload: error
  }
}

export const deleteRecipe = (id) => {
  return function(dispatch) {
    dispatch(deleteRecipeRequest())
    axiosWithAuth()
    .delete(`/api/recipes/${id}`)
    .then(res => 
      dispatch(deleteRecipeSuccess()))
      .catch(err => dispatch(deleteRecipeFailure(err.message)))
  }
}