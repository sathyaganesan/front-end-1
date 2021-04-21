import React from 'react'

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from '../Redux/Reducers/rootReducer'

import LoginForm from './LoginForm'
import SignUpForm from './SignUpForm'
import NavBar from './NavBar'
import {Route} from "react-router-dom";
import RecipesHome from './RecipesHome'
import InstructionsCard from './InstructionsCard'
import IngredientsCard from './IngredientsCard'
import AddRecipeForm from './AddRecipeForm'

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

const App = () => {
  return (
    <Provider store={store}>
    <NavBar />
      <Route exact path = "/Home" component = {RecipesHome} />
      <Route exact path = "/Signup" component = {SignUpForm}/>
      <Route exact path = "/Login" component = {LoginForm} />
      <Route path="/Home/instructions/:id">
        <InstructionsCard />
      </Route>
      <Route path="/Home/ingredients/:id">
        <IngredientsCard />
      </Route>
      <Route path="/Add">
        <AddRecipeForm />
      </Route>
    </Provider>
  )
}

export default App