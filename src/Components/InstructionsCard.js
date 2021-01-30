import React, { useEffect, useState } from 'react';
import { Card, Button, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import { useParams, Link } from 'react-router-dom'
// import { axiosWithAuth } from './axiosWithAuth'
import axios from 'axios'

const InstructionsCard = (props) => {
console.log('instructions props: ', props);

const initialState = {
  id: null,
  name: '',
  instruction: ''
}
const [instructionData, setInstructionData] = useState(initialState)

const params = useParams()

console.log('instr params: ', params);

  const getInstructions = (id) => {
    
    axios
    .get(`https://buildweek-backend-familyrecipe.herokuapp.com/api/recipe/${id}/instructions`)
    .then((res) => {
// console.log('instr data: ', res.data[0]);
      setInstructionData(res.data[0])
    })
    .catch(err => console.log(err))
  }

  useEffect(( )=> {
getInstructions(params.id)
  }, [params.id])

  return (
    <Container style={{marginTop: '100px'}}>
    <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
      <Card body inverse style={{backgroundColor: '#C4804D'}}>
      <CardTitle tag="h5">Recipe name: {instructionData.name}</CardTitle>
      <Link key={params.id} to={`/Home/ingredients/${params.id}`}>Get ingredients!</Link>
        <CardText>Instructions: {instructionData.instruction}</CardText>
      </Card>
      </Col>
      </Row>
    </Container>
  );
};

export default InstructionsCard;