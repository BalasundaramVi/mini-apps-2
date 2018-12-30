import boardMaker from '../utils/boardMaker';

const updateBoardReducer = (state, action) => {
  switch (action.type) {
    case 'MAKE_NEW_BOARD':
      return boardMaker(action.rows, action.cols, action.mines);
    case 'UPDATE_BOARD':
      return action.board;
    default:
      return [[]];
  }
};

export default updateBoardReducer;
