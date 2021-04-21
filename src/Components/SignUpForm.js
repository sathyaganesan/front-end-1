import React,{useState} from "react";
import { Button, Form, FormGroup, Label, Input, Container, Row, Col} from "reactstrap";
import axios from 'axios'

function SignUpForm (props){
  const [signForm, setSignForm] = useState({
      username : "",
      password : ""
  });

  const inputChange = e => {
      setSignForm({...signForm, [e.target.name] : e.target.value});
  };

  const formSubmit = e => {
    e.preventDefault();
    //axios request
    axios
    .post('https://buildweek-backend-familyrecipe.herokuapp.com/api/user/signup', signForm)
    .then((res) => {
      props.history.push('/Home')
    })
    .catch(err => console.log('signup error: ',err))
  };

  return (
    <Container style={{marginTop: '100px', width: '500px'}}>
      <Row>
        <Col>
        <h3>Please Signup</h3>
          <Form onSubmit={formSubmit}>
            <FormGroup>
              <Label for="username">Username</Label>
              <Input type="text" name="username" id="username" placeholder="enter your username" onChange={inputChange}/>
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="enter your password" onChange={inputChange}/>
            </FormGroup>
            <Button>Signup</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  )
}

export default SignUpForm;