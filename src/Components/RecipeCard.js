import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { Link } from 'react-router-dom'
import { axiosWithAuth } from './axiosWithAuth';


const RecipeCard = (props) => {
console.log('card props: ', props);

const id = props.recipeName.id
console.log('id:', id);

// const getInstructions = () => {
//   const id = props.recipeName.id
//   axiosWithAuth()
//   .get(`https://buildweek-backend-familyrecipe.herokuapp.com/api/recipe/${id}/instructions`)
//   .then((res) => {
//     console.log('get details: ', res.data)
//   })
//   .catch(err => console.log(err))
// }

  return (
    <div>
      <Card body outline color="secondary">
        <CardTitle tag='h5'>{props.recipeName.name}</CardTitle>
       <Link key={id} to={`/Home/instructions/${id}`}>
       <h4>See instructions</h4>
       </Link>
      </Card>
    </div>
  );
};

export default RecipeCard;