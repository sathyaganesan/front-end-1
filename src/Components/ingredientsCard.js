import React from 'react';

const ingredientsCard = () => {
  const initialState = {
    id: null,
    name: '',
    ingredients: []
  }
  const [ingredientData, setIngredientData] = useState(initialState)
  
  const params = useParams()
  
    const getIngredients = (id) => {
      
      axios
      .get(`https://buildweek-backend-familyrecipe.herokuapp.com/api/recipe/${id}/ingredients`)
      .then((res) => {
  console.log('ingredients data: ', res.data);
        // setingredientData(res.data[0])
      })
      .catch(err => console.log(err))
    }
  
    useEffect(( )=> {
  getIngredients(params.id)
    }, [params.id])
  
    return (
      <Container style={{marginTop: '100px'}}>
      <Row>
          <Col sm="12" md={{ size: 6, offset: 3 }}>
        <Card body inverse style={{backgroundColor: '#C4804D'}}>
        <CardTitle tag="h5">Recipe name: </CardTitle>
          <CardText>ingredients: </CardText>
        </Card>
        </Col>
        </Row>
      </Container>
  );
};

export default ingredientsCard;