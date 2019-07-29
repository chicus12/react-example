import React from 'react'
import axios from 'axios'
import { CardColumns, Card } from "react-bootstrap";
class Actor extends React.Component {
  state = {
    actors: []
  }

  componentDidMount = async () => {
    const response = await axios.get(
      `http://api.tvmaze.com/shows/${this.props.match.params.show}/cast`
    );

    this.setState({actors: response.data})
  }

  render() {
    const actors = this.state.actors
    console.log(actors)
    return (
      <CardColumns>
        {actors.map(
          actor =>
            console.log("here", actor) || (
              <Card key={actor.character.id}>
                <Card.Img
                  variant="top"
                  src={
                    actor.character.image
                      ? actor.character.image.medium
                      : "https://icon-library.net/images/default-user-icon/default-user-icon-4.jpg"
                  }
                />
                <Card.Body>
                  <Card.Title>{actor.character.name}</Card.Title>
                </Card.Body>
              </Card>
            )
        )}
      </CardColumns>
    );
  }
}

export default Actor