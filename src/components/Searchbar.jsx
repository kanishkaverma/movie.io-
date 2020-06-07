import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateMovieTileData } from '../redux/actions/actions';

class Searchbar extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="searchbar-root">
                Searchbar Title
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateMovieTileData: bindActionCreators(updateMovieTileData, dispatch)
    };
}

export default connect(null, mapDispatchToProps)(Searchbar);
