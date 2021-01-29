import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard'
import { axiosWithAuth } from './axiosWithAuth'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap';

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
    <div 
    // style={{  
    //   backgroundImage: "url(" + "https://images.unsplash.com/photo-1609210885114-01fc2ba78fe0?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=3711&q=80" + ")",
    //   // backgroundPosition: 'center',
    //   backgroundSize: 'cover',
    //   // backgroundRepeat: 'no-repeat'
    // }}
    >
      <h2>Your Recipes!</h2>
      {recipeNames.map((recipeName)=> 
      <Container>
 <Row>
        <Col>
        <RecipeCard recipeName={recipeName} />
        </Col>
      </Row>
      </Container>
     
      
      )}
      
    </div>
  );
};

export default RecipesHome;