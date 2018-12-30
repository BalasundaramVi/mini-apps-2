import { combineReducers } from 'redux';
import Board from './Board';
import GameState from './GameState';

const rootReducer = combineReducers({
  GameState,
  Board,
});

export default rootReducer;
