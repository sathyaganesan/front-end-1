import { axiosWithAuth } from '../../Components/axiosWithAuth'

export const GET_RECIPES_REQUEST = "GET_RECIPES_REQUEST"
export const GET_RECIPES_SUCCESS = "GET_RECIPES_SUCCESS"
export const GET_RECIPES_FAILURE = "GET_RECIPES_FAILURE"

export const getRecipesRequest = () => {
  return {
    type: GET_RECIPES_REQUEST
  }
}

export const getRecipesSuccess = (recipes) => {
  return {
    type: GET_RECIPES_SUCCESS,
    payload: recipes
  }
}

export const getRecipesFailure = (error) => {
  return {
    type: GET_RECIPES_FAILURE,
    payload: error
  }
}

export const getRecipes = () =>{
return function (dispatch) {
  dispatch(getRecipesRequest())
  axiosWithAuth()
  .get("/api/recipes")
  .then((res) => {
    console.log('get data: ', res.data);
    const recipes = res.data
    dispatch(getRecipesSuccess(recipes))
  })
  .catch(err => {
    dispatch(getRecipesFailure(err.message))
  })
}}

