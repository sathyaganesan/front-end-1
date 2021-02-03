import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard'
import { axiosWithAuth } from './axiosWithAuth'
import axios from 'axios'
import { Container, Row, Col } from 'reactstrap';

const RecipesHome = () => {

const [recipeNames, setRecipeNames] = useState([])

const getRecipes = () => {
axiosWithAuth()
.get("/api/recipes")
.then((res) => {
  console.log('get res: ', res.data);
  setRecipeNames(res.data)
})

.catch(err => console.log('get err: ', err))
}

useEffect(() => {
getRecipes()
}, [])

  return (
    <Container style={{marginTop: '100px', width: '500px'}}>
    <Row>
      <Col>
      <h2>Your Recipes!</h2>
      {recipeNames.map((recipeName)=> 
      <Container key={recipeName.id} style={{marginTop: '20px'}} >
 <Row>
        <Col>
        <RecipeCard recipeName={recipeName} />
        </Col>
      </Row>
      </Container>
     
      
      )}
      </Col>
      </Row>
      </Container>
      
        
  );
};

export default RecipesHome;