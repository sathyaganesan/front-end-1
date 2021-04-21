import React, { useState, useEffect } from "react";
import {CardText} from "reactstrap";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";
// import axios from 'axios'

const IngredientsCard = (props) => {
  console.log("ingred props: ", props);

  const initialState = [{
    name: '',
    quantity: ''
  }];

  const [ingredientData, setIngredientData] = useState(initialState);

  const params = useParams();
  console.log("params id: ", params);

  const getIngredients = (id) => {
    axiosWithAuth()
      .get(`/api/ingredientslist/recipe/${params.id}/ingredients`)
      .then((res) => {
        console.log('ingr res: ', res);
        setIngredientData(res.data)
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getIngredients(params.id);}, [params.id]);

  return (
    <CardText><h5 style={{marginTop: '10px'}}>Ingredients: 
      </h5>
      {ingredientData.map((ingredient) => <p key={ingredient.id}>{ingredient.name}</p>)}
    </CardText>
  );
};

export default IngredientsCard;
