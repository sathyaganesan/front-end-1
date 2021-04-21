import React, { useState } from 'react';
import { connect } from 'react-redux'
import { deleteRecipe } from '../Redux/Actions/deleteRecipeActions'
import { Card, Button, CardTitle} from 'reactstrap';
import { Link } from 'react-router-dom'
import EditRecipeForm from './EditRecipeForm';


const RecipeCard = (props) => {

  const [clicked, setClicked] = useState(false)

  const id = props.recipeName.id

  return (
    <div>
      <Card body outline color='success' style={{backgroundColor: '#E6BD8F'}}>
        <CardTitle tag='h5'>{props.recipeName.name}</CardTitle>
        <Link key={id} to={`/Home/instructions/${id}`} style={{color: '#347382'}}>
          <h5>Click for instructions</h5>
        </Link>
        <Button
          style={{ marginTop: '10px', width: '170px', backgroundColor: '#DE7F6E' }}
          onClick={() => {
            props.deleteRecipe(id)
            props.setRefresh(!props.refresh)
          }}>
          Delete Recipe
        </Button>
        <Button
          style={{ marginTop: '10px', width: '170px', backgroundColor: '#93A586' }}
          onClick={() => { setClicked(!clicked) }}>
          Edit Recipe
        </Button>
        {clicked && <EditRecipeForm id={props.recipeName.id} refresh={props.refresh} setRefresh={props.setRefresh} clicked={clicked} setClicked={setClicked}/>}
      </Card>
    </div>
  );
};

export default connect(null, {deleteRecipe})(RecipeCard);