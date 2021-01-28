import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios'

const LoginForm = () => {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

const onChangeHandler = (e) => {
console.log(e.target.value);
setCredentials({
  ...credentials,
  [e.target.name]: e.target.value
})
}

const onSubmitHandler = (e) => {
e.preventDefault()
console.log('submitted!');
}

  return (
    <Form onSubmit={onSubmitHandler}>
          <FormGroup>
        <Label for="username">Username</Label>
        <Input type="text" name="username" id="username" placeholder="enter your username" onChange={onChangeHandler}/>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input type="password" name="password" id="examplePassword" placeholder="enter your password" onChange={onChangeHandler}/>
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default LoginForm