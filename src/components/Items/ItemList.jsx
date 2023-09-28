import React from 'react'
import { Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Counter from '../Counter/Counter';
import { Link } from 'react-router-dom';

const ItemList = ({ items }) => {
  return (
    <>
      {
        items.map((item) => (
          <Col md={4} lg={3} xs={12} key={item.id}>
            <CardList item={item}/>
          </Col>

        ))
      }
      </>
  )
}


const CardList = ({item}) => {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image}/>
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          {item.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
      <Counter/>
      <Link to = {`/Detalles/${item.id}`} >
      <Button variant="primary">Ver Detalles</Button>
      </Link>
      
    </Card>
  );

}


export default ItemList