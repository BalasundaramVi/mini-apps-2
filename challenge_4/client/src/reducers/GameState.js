const initialState = {
  rows: undefined,
  cols: undefined,
  mineCount: 0,
  gameOver: true,
};

const gameStateReducer = (state, action) => {
  switch (action.type) {
    case 'START_NEW_GAME':
      return {
        ...state,
        mineCount: action.mines,
        gameOver: false,
      };
    case 'GAME_OVER':
      return {
        ...state,
        gameOver: true,
      };
    case 'UPDATE_ROWS':
      return {
        ...state,
        rows: action.rows,
      };
    case 'UPDATE_COLS':
      return {
        ...state,
        cols: action.cols,
      };
    case 'UPDATE_MINES':
      return {
        ...state,
        mineCount: action.mines,
      };
    default:
      return initialState;
  }
};

export default gameStateReducer;
