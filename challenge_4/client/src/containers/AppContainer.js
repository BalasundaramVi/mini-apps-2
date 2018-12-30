import { connect } from 'react-redux';

import App from '../components/App';
import {
  startNewGame, gameOver, startingRowNum, startingColNum, startingMineCount,
} from '../actions/gameStateActions';
import { createBoard } from '../actions/boardActions';


const mapStateToProps = state => ({
  rows: state.GameState.rows,
  cols: state.GameState.cols,
  mineCount: state.GameState.mineCount,
  gameOver: state.GameState.gameOver,
});

const mapDispatchToProps = dispatch => ({
  handleColChange: (cols) => {
    dispatch(startingColNum(cols));
  },

  handleRowChange: (rows) => {
    dispatch(startingRowNum(rows));
  },

  handleMineChange: (mines) => {
    dispatch(startingMineCount(mines));
  },

  handleGameOver: () => {
    dispatch(gameOver());
  },

  startNewGame: (rows, cols, mineCount) => {
    dispatch(startNewGame(mineCount));
    dispatch(createBoard(rows, cols, mineCount));
  },
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default AppContainer;
