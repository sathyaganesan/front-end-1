import React, {useState, useEffect} from 'react';
import { Card, Button, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import { useParams, Link } from 'react-router-dom'
// import { axiosWithAuth } from './axiosWithAuth'
import axios from 'axios'

const IngredientsCard = (props) => {
console.log('ingred props: ', props);

  const initialState = {
    id: null,
    name: '',
    ingredients: []
  }
  const [ingredientData, setIngredientData] = useState(initialState)
  
  const params = useParams()
  console.log('params id: ', params)
  
    const getIngredients = (id) => {
      
      axios
      .get(`https://buildweek-backend-familyrecipe.herokuapp.com/api/ingredientslist/recipe/${params.id}/ingredients`)
      .then((res) => {
  console.log('ingredients data: ', res.data);
        // setingredientData(res.data[0])
      })
      .catch(err => console.log(err))
    }
  
    useEffect(( )=> {
  getIngredients(params.id)
    }, [params.id])
  
    return (
      <Container style={{marginTop: '100px'}}>
      <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card body inverse style={{backgroundColor: '#C4804D'}}>
        <CardTitle tag="h5">Recipe name: </CardTitle>
          <CardText>Ingredients: </CardText>
        </Card>
        </Col>
        </Row>
      </Container>
  );
};

export default IngredientsCard;