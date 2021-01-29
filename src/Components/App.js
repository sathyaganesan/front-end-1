import React from 'react'
import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import NavBar from './NavBar'
import {Route} from "react-router-dom";

const App = () => {
  return (
    <>
    <NavBar />
    <Route exact path = "/Signup" component = {SignUpForm}/>
    <Route exact path = "/Login" component = {LoginForm} />
    </>
  )
}

export default App