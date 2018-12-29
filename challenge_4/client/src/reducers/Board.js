const updateBoardReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_BOARD':
      return action.board;
    default:
      return [[]];
  }
};

export default updateBoardReducer;
