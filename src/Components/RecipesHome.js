import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard'
import { axiosWithAuth } from './axiosWithAuth'
import axios from 'axios'

const RecipesHome = () => {

const [recipeNames, setRecipeNames] = useState([])

const getRecipes = () => {
axios
.get("https://buildweek-backend-familyrecipe.herokuapp.com/api/recipe")
.then((res) => {
  console.log('get res: ', res.data);
  setRecipeNames(res.data)
})

.catch(err => console.log(err))
}

useEffect(() => {
getRecipes()
}, [])

  return (
    <div>
      <h2>Your Recipes!</h2>
      {recipeNames.map((recipeName)=> 
      <RecipeCard recipeName={recipeName} />
      )}
      
    </div>
  );
};

export default RecipesHome;