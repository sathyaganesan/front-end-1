import React, { useState, useEffect } from "react";
import {
  Card,
  Button,
  CardTitle,
  CardText,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useParams, Link } from "react-router-dom";
import { axiosWithAuth } from "./axiosWithAuth";
// import axios from 'axios'

const IngredientsCard = (props) => {
  console.log("ingred props: ", props);

  const initialState = [{
    name: '',
    quantity: ''
  }

    ];
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
    getIngredients(params.id);
  }, [params.id]);

  return (
    // <Container style={{ marginTop: "100px" }}>
    //   <Row>
    //     <Col sm="12" md={{ size: 6, offset: 3 }}>
    //       <Card body inverse style={{ backgroundColor: "#C4804D" }}>
    //         <CardTitle tag="h5">Recipe name: </CardTitle>
            <CardText><h5>Ingredients: 
              </h5>
             
              {ingredientData.map((ingredient) => <p>{ingredient.name}</p>)}
              </CardText>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default IngredientsCard;
