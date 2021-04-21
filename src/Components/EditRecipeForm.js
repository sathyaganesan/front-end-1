import React, { useState } from 'react';
import { connect } from 'react-redux'
import { editRecipe } from '../Redux/Actions/editRecipeActions'
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';

const EditRecipeForm = (props) => {
  console.log('edit props: ', props);
  const id = props.id

  const initialState = {
  category: '',
  name: '',
  instruction: ''
  }
  const [editedRecipe, setEditedRecipe] = useState(initialState)


  const onChangeHandler = (e) => {
  setEditedRecipe({...editedRecipe, [e.target.name]: e.target.value})
  }

  return (
    <Container style={{marginTop: '10px', width: '400px'}}>
      <Row>
        <Col>
          <h3>Edit recipe</h3>
          <Form onSubmit={props.editRecipe(id, editedRecipe)}>
            <FormGroup>
              <Label for="name">Name:</Label>
              <Input type="text" name="name" id="username" placeholder="enter recipe name" onChange={onChangeHandler}/>
            </FormGroup>
            <FormGroup>
              <Label for="category">Category: </Label>
              <Input type="text" name="category" id="category" placeholder="enter recipe category" onChange={onChangeHandler}/>
            </FormGroup>
            <FormGroup>
              <Label for="instructions">Instructions: </Label>
              <Input type="text" name="instruction" id="instruction" placeholder="enter recipe instructions" onChange={onChangeHandler}/>
            </FormGroup>
            <Button style={{color: '#3C4B3F', backgroundColor: '#E9C149'}} >Submit</Button>
          </Form>
      </Col>
    </Row>
  </Container>
  );
};



export default connect(null, {editRecipe})(EditRecipeForm);