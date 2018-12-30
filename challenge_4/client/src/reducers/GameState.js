const gameStateReducer = (state, action) => {
  switch (action.type) {
    case 'START_NEW_GAME':
      return {
        mineCount: action.mines,
        gameOver: false,
      };
    case 'GAME_OVER':
      return {
        ...state,
        gameOver: true,
      };
    default:
      return {
        mineCount: 0,
        gameOver: true,
      };
  }
};

export default gameStateReducer;
