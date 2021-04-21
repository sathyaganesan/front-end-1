import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import axios from 'axios'

const LoginForm = (props) => {

  const [credentials, setCredentials] = useState({
    username: '',
    password: ''
  })

  const onChangeHandler = (e) => {
    console.log(e.target.value);
    setCredentials({...credentials, [e.target.name]: e.target.value})
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()
    console.log('submitted!');
    axios.post('https://buildweek-backend-familyrecipe.herokuapp.com/api/user/login', credentials)
      .then((res) => {
      console.log('login res: ', res);
      localStorage.setItem('token', res.data.token)
      props.history.push('/Home')
    })
      .catch(err => console.log(err))
  }

  return (
    <Container style={{marginTop: '100px', width: '500px'}}>
      <Row>
        <Col>
        <h3>Login</h3>
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
        </Col>
      </Row>
    </Container>
  )
}

export default LoginForm