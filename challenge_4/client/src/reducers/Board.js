import { boardMaker, revealSpace } from '../utils';

const BoardReducer = (state, action) => {
  switch (action.type) {
    case 'MAKE_NEW_BOARD':
      return boardMaker(action.rows || 20, action.cols || 20, action.mines || 75);
    case 'REVEAL_SPACE':
      return revealSpace(state, action.row, action.col);
    default:
      return [[]];
  }
};

export default BoardReducer;
