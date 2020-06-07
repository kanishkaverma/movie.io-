import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Searchbar, MovieTile } from '../components'

class Home extends Component {

    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="home-page-root">
                Home Page
                <Searchbar/>
                <MovieTile/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        movieTileData: state.delta.movieTileData,
    };
};

export default connect(mapStateToProps, null)(Home);