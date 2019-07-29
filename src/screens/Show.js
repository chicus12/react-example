import React from "react";
import axios from "axios";
import { CardColumns } from "react-bootstrap";


import ShowItem from '../components/Show'

class Show extends React.Component {
  state = {
    shows: [],
    search: "",
    searched: false
  };

  navigateToActors = show => {
    this.props.history.push(`/actors/${show}`);
  };

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps);
    console.log(nextState);

    if (this.state.search.length &&  this.state.searched && this.state.search === nextState.search) {
      console.log('here')
      return false
    }

    return true
  }

  componentDidMount = async () => {
    const response = await Promise.all([
      axios.get("http://api.tvmaze.com/shows/27436"),
      axios.get("http://api.tvmaze.com/shows/17861")
    ]);

    this.setState({
      shows: [response[0].data, response[1].data]
    });
  };

  handleChange = event => {
    this.setState({ search: event.target.value, searched: false });
  };

  handleKeyPress = async event => {
    if (event.key === "Enter") {
      const response = await axios.get(`http://api.tvmaze.com/search/shows?q=${this.state.search}`)

      console.log(response.data)
      this.setState(
        {shows: response.data.map(show => show.show), searched: true}
      )
    }
  };

  render() {
    const shows = this.state.shows;

    return (
      <>
        <input
          type="text"
          placeholder="buscar..."
          value={this.state.value}
          onChange={this.handleChange}
          onKeyPress={this.handleKeyPress}
        />
        <CardColumns>
          {shows.map(show => (
            <ShowItem show={show} navigateToActors={this.navigateToActors}>
              {" "}
            </ShowItem>
          ))}
        </CardColumns>
      </>
    );
  }
}

export default Show;
