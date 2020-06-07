import * as types from '../actions/actionTypes';
import initialState from './initialState';

// Perils of having a nested tree strucutre in the Redux State XD XD XD 
export default function deltaReducer(state = initialState, action) {
  switch (action.type) {
    
    case (types.UPDATE_MOVIE_TILE_DATA): {
      return Object.assign({}, state, { ...state, movieTileData: action.data });
    }
    default:
      return state;
  }
}

