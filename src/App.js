import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import product from "./product.js";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div>
         <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="mercedes.jpg" />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{product.name}</ListGroup.Item>
        <ListGroup.Item>{product.description}</ListGroup.Item>
        <ListGroup.Item>{product.price}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.motor1.com%2Fnews%2F383599%2Fmercedes-maybach-gls-600-suv%2F&psig=AOvVaw1Y1TXIovdrDDyWZ7SWMpXq&ust=1700663379012000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjUm_em1YIDFQAAAAAdAAAAABAE">Card Link</Card.Link>
        <Card.Link href="https://www.google.com/url?sa=i&url=https%3A%2F%2Ffr.motor1.com%2Fnews%2F383599%2Fmercedes-maybach-gls-600-suv%2F&psig=AOvVaw1Y1TXIovdrDDyWZ7SWMpXq&ust=1700663379012000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCKjUm_em1YIDFQAAAAAdAAAAABAE">Another Link</Card.Link>
      </Card.Body>
    </Card>
   
    
    </div>
  )
}

export default App
