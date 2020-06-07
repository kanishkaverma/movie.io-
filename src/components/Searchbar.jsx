import React, { Component } from "react";
import APIKEY from "../config/apikey";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateMovieTileData } from "../redux/actions/actions";
import { FaSearch } from "react-icons/fa";

class Searchbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "red",
    };
  }

  componentDidMount() {
    this.onSubmit();
  }
  
  handleQueryChange = (event) => {
    event.preventDefault();

    this.setState({ query: event.target.value });
  };
  onSubmit = async (event) => {
    const query = this.state.query;
    let response = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${APIKEY}&query=${query}`
    );
    let data = await response.json();
    const movieTileData = data.results.map((x) => ({
      title: x.title,
      overview: x.overview,
      posterPath: x.poster_path,
    }));
    this.props.updateMovieTileData(movieTileData);
  };

  render() {
    const { query } = this.state;

    return (
      <div className="searchbar-root">
        <input type="text" value={query} onChange={this.handleQueryChange} />
        <div className="icon" onClick={this.onSubmit}>
          <FaSearch/>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateMovieTileData: bindActionCreators(updateMovieTileData, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(Searchbar);
