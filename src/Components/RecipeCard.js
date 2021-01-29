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
      <Card body outline color='success' style={{backgroundColor: '#E6BD8F'}}>
        <CardTitle tag='h5'>{props.recipeName.name}</CardTitle>
       <Link key={id} to={`/Home/instructions/${id}`}>
       <h5>See instructions</h5>
       </Link>
      </Card>
    </div>
  );
};

export default RecipeCard;