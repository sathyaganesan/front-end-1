import { axiosWithAuth } from '../../Components/axiosWithAuth'

export const EDIT_RECIPES_REQUEST = "EDIT_RECIPES_REQUEST"
export const EDIT_RECIPES_SUCCESS = "EDIT_RECIPES_SUCCESS"
export const EDIT_RECIPES_FAILURE = "EDIT_RECIPES_FAILURE"

export const editRecipesRequest = () => {
  return {
    type: EDIT_RECIPES_REQUEST
  }
}

export const editRecipesSuccess = (editedRecipe) => {
  return {
    type: EDIT_RECIPES_SUCCESS,
    payload: editedRecipe
   
  }
}

export const editRecipesFailure = (error) => {
  return {
    type: EDIT_RECIPES_FAILURE,
    payload: error
  }
}

export const editRecipe = (id, editedRecipe) =>{
return function (dispatch) {
  dispatch(editRecipesRequest())
  axiosWithAuth()
.put(`/api/recipes/${id}`, editedRecipe)
  .then((res) => {
    console.log('get data: ', res.data);
    
    dispatch(editRecipesSuccess())
  })
  .catch(err => {
    dispatch(editRecipesFailure(err.message))
  })
}}
