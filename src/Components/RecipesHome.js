import React, { useEffect, useState } from "react";
import { connect } from 'react-redux'
import { getRecipes } from '../Redux/Actions/getRecipesActions'
import { searchRecipes } from '../Redux/Actions/searchRecipesActions'
import RecipeCard from "./RecipeCard";
import { axiosWithAuth } from "./axiosWithAuth";
import axios from "axios";
import {
  Container,
  Row,
  Col,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

const RecipesHome = (props) => {

// console.log('home props: ', props);

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  // const [recipeNames, setRecipeNames] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  //state to allow page to refresh when state changes
  const [refresh, setRefresh] = useState(false)

  //state for true or false filtered data
  const [searchSubmit, setSearchSubmit] = useState(false)

  // const getRecipes = () => {
  //   axiosWithAuth()
  //     .get("/api/recipes")
  //     .then((res) => {
  //       console.log("get res: ", res.data);
  //       setRecipeNames(res.data);
  //     })

  //     .catch((err) => console.log("get err: ", err));
  // };

  useEffect(() => {
    props.getRecipes();
  }, [refresh]);

  const handleSearchInput = (e) => {
    // console.log("search input: ", e.target.value);
    setSearchValue(e.target.value)
  };

  // const onSearchSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("submit search");
  //   setRecipeNames(filteredRecipes())
  //   setSearchValue('')
  // };



 let filteredRecipes =  () => { return props.recipeNames.filter(recipe => recipe.name.toLowerCase().includes(searchValue.toLowerCase()))
    }

console.log('filtered: ', filteredRecipes());

  const filtered = filteredRecipes()

  return (
    <Container style={{ marginTop: "100px", width: "500px" }}>
      <Row>
        <Col>
          <h2>Your Recipes!</h2>
<br />
          <Form inline>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              {/* <Label for="search" className="mr-sm-2">Search by title: </Label> */}
              <Input
                type="text"
                name="search"
                id="search"
                placeholder="Search by title"
                onChange={handleSearchInput}
              />
            </FormGroup>
            <Button onClick={(e) => {
              e.preventDefault()
              props.searchRecipes(filtered)
              setSearchValue('')
              setSearchSubmit(!searchSubmit)
              }}>Submit</Button>
          </Form>
          <br />
  {!searchSubmit ?
 (props.recipeNames.map((recipeName) => (
  <Container key={recipeName.id} style={{ marginTop: "20px" }}>
    <Row>
      <Col>
        <RecipeCard recipeName={recipeName} refresh={refresh} setRefresh={setRefresh}/>
      </Col>
    </Row>
  </Container>
)))
:
(props.filteredRecipeNames.map((recipeName) => (
  <Container key={recipeName.id} style={{ marginTop: "20px" }}>
    <Row>
      <Col>
        <RecipeCard recipeName={recipeName} refresh={refresh} setRefresh={setRefresh}/>
      </Col>
    </Row>
  </Container>
)))
  }

         

        </Col>
      </Row>
    </Container>
  );
};

const mapStateToProps = state => {
  console.log('Home state: ', state)
  return {
    recipeNames: state.get.recipes,
    filteredRecipeNames: state.search.recipes
}}


export default connect(mapStateToProps, {getRecipes, searchRecipes})(RecipesHome);
