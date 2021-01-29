import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard'
import { axiosWithAuth } from './axiosWithAuth'

const RecipesHome = () => {

const [recipeNames, setRecipeNames] = useState([])

const getRecipes = () => {
axiosWithAuth()
.get("")
.then((res) => console.log('get data: ', res.data))
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