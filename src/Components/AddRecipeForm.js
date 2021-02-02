import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Container, Row, Col } from 'reactstrap';
import axios from 'axios'
import { strictEqual } from 'assert';
import { axiosWithAuth } from './axiosWithAuth';

const AddRecipeForm = () => {
const initialState = {
  category: '',
  name: '',
  instruction: ''
}
  const [newRecipe, setNewRecipe] = useState(initialState)

const onChangeHandler = (e) => {
setNewRecipe({
  ...newRecipe,
  [e.target.name]: e.target.value
})
}

const onSubmitHandler = (e) => {
e.preventDefault()
axiosWithAuth()
.post('/api/recipes', newRecipe)
.then((res) => console.log('add res: ', res))
.catch(err => console.log('add err: ', err))
}

  return (
    <Container style={{marginTop: '100px', width: '500px'}}>
    <Row>
      <Col>
      <h3>Add a new recipe</h3>
      <Form onSubmit={onSubmitHandler}>
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
    <Button>Submit</Button>
  </Form>
      </Col>
    </Row>
  </Container>
  );
};

export default AddRecipeForm;