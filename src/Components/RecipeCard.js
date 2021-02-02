import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom'
import { axiosWithAuth } from './axiosWithAuth';
import axios from 'axios'


const RecipeCard = (props) => {
console.log('card props: ', props);

const id = props.recipeName.id
console.log('id:', id);

const deleteRecipe = () => {
axiosWithAuth()
.delete(`/api/recipes/${id}`)
.then((res) => console.log('delete res: ', res))
.catch(err => console.log('delete err: ', err))
}

  return (
    <div>
      <Card body outline color='success' style={{backgroundColor: '#E6BD8F'}}>
        <CardTitle tag='h5'>{props.recipeName.name}</CardTitle>
       <Link key={id} to={`/Home/instructions/${id}`}>
       <h5>See instructions</h5>
       </Link>
       <Button onClick={deleteRecipe}>Delete Recipe</Button>
      </Card>
    </div>
  );
};

export default RecipeCard;