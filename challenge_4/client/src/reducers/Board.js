import boardMaker from '../utils/boardMaker';

const BoardReducer = (state, action) => {
  switch (action.type) {
    case 'MAKE_NEW_BOARD':
      return boardMaker(action.rows || 20, action.cols || 20, action.mines || 75);
    case 'UPDATE_BOARD':
      return action.board;
    default:
      return [[]];
  }
};

export default BoardReducer;
