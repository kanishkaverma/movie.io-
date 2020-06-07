import React, { Component } from "react";

import { connect } from "react-redux";
import { Searchbar, MovieTile } from "../components";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { movieTileData } = this.props;
    return (
      <div className="home-page-root">
        Home Page
        <Searchbar />
        {movieTileData.map((x, i) => (
          <MovieTile data={x} key={i} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    movieTileData: state.delta.movieTileData,
  };
};

export default connect(mapStateToProps, null)(Home);
