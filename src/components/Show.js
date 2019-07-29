import React from 'react'
import {  Card, Button } from "react-bootstrap";

function Show(props) {
  return (
    <Card key={props.show.id}>
      <Card.Img variant="top" src={props.show.image ? props.show.image.medium: null} />
      <Card.Body>
        <Card.Title>{props.show.name}</Card.Title>
        <Card.Text dangerouslySetInnerHTML={{ __html: props.show.summary }} />
        <Button
          variant="primary"
          onClick={() => props.navigateToActors(props.show.id)}
        >
          Ver Actores
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Show