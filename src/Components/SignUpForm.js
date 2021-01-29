import React,{useState} from "react";
import { Button, Form, Input} from "reactstrap";
import axios from 'axios'

function SignUpForm (){
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
          console.log('signup submit res: ', res)
        })
        .catch(err => console.log(err))
    };

    return (
        <Form onSubmit = {formSubmit}>
            <Input 
            type = "text"
            name  = "username"
            placeholder = "UserName"
            value = {signForm.username}
            onChange = {inputChange}
            />

            <Input 
            type = "password"
            name = "password"
            placeholder = "PassWord"
            value = {signForm.password}
            onChange = {inputChange}
            />
            <Button color = "primary">Submit</Button>
        </Form>
    )
}

export default SignUpForm;