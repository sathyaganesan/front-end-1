import React, { useEffect, useState } from 'react';
import { Card, Button, CardTitle, CardText, Container, Row, Col } from 'reactstrap';
import { useParams} from 'react-router-dom'
import { axiosWithAuth } from './axiosWithAuth'
import IngredientsCard from './IngredientsCard'

const InstructionsCard = (props) => {
  console.log('instructions props: ', props);

  const [clicked, setClicked] = useState(false)

  const initialState ={
    id: null,
    name: '',
    instruction: ''
  }
  const [instructionData, setInstructionData] = useState(initialState)

  const params = useParams()

  console.log('instr params: ', params);

  const getInstructions = (id) => {
    axiosWithAuth()
      .get(`/api/recipes/${id}/instructions`)
      .then((res) => {
      setInstructionData(res.data[0])
    })
    .catch(err => console.log(err))
  }

  useEffect(( )=> {getInstructions(params.id)}, [params.id])

  return (
    <Container style={{marginTop: '100px'}}>
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card body inverse style={{backgroundColor: '#C4804D'}}>
            <CardTitle tag="h5">Recipe name: {instructionData.name}</CardTitle>
            <CardText>Instructions: {instructionData.instruction}</CardText>
            <Button onClick={() => {setClicked(!clicked)}} style={{marginTop: '10px', width: '170px', backgroundColor: '#93A560'}}>Get ingredients!</Button>
            {clicked && <IngredientsCard />}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default InstructionsCard;
