import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import {Route} from "react-router-dom";

const App = () => {
  return (
    <>
    <div>Welcome to Family Recipes App!</div>
    <Route exact path = "/Signup" component = {SignUpForm}/>
    <Route exact path = "/Login" component = {LoginForm} />
    </>
  )
}

export default App