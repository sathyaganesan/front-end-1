// import { axiosWithAuth } from '../../Components/axiosWithAuth'

export const SEARCH_RECIPE = "SEARCH_RECIPE"

export const searchRecipes = (filteredRecipes) => {
return {
  type: SEARCH_RECIPE,
  payload: filteredRecipes
}
}