import React from 'react';
import { Card, Button, CardTitle, CardText } from 'reactstrap';
import { axiosWithAuth } from './axiosWithAuth';

const RecipeCard = (props) => {

const getDetails = () => {
  axiosWithAuth()
  .get('')
  .then((res) => {
    console.log('get details: ', res.data)
  })
  .catch(err => console.log(err))
}

  return (
    <div>
      <Card body outline color="secondary">
        <CardTitle tag='h5'>{props.recipeName}</CardTitle>
        <Button color='secondary' onClick={getDetails}>Recipe details</Button>
      </Card>
    </div>
  );
};

export default RecipeCard;