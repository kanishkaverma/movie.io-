import React, { Component } from "react";

export default class MovieTile extends Component {
  // constructor(props) {
  //     super(props)
  // }

  render() {
    const { data } = this.props;
    const imgpath = `https://image.tmdb.org/t/p/w300_and_h450_bestv2${data.posterPath}`;

    return (
      <div className="movieTile-root">
        <img className="image" src={imgpath} />
        <div className="content">
          <div className="title" >{data.title}</div>
          <div className="overview">{data.overview}</div>
        </div>
      </div>
    );
  }
}
