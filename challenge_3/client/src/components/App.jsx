import React from 'react';

import Board from './Board';
import Header from './Header';
import Bowl from './Bowl';

import buildInitialBoard from '../../utils/index';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.bowl = this.bowl.bind(this);

    this.state = {
      curBowl: 0,
      board: buildInitialBoard(),
      score: 0,
      secondBowl: 10,
    };
  }

  bowl(p) {
    let pins = p;
    const { board } = this.state;
    let { score, secondBowl, curBowl } = this.state;
    if (board[curBowl].firstBowl !== -1 || pins === 10) {
      if (board[curBowl].firstBowl + pins > 10) {
        pins = 10 - board[curBowl].firstBowl;
      }
      board[curBowl].secondBowl = pins;
      score += pins;
      board[curBowl].score = score;
      curBowl += 1;
      secondBowl = 10;
    } else {
      board[curBowl].firstBowl = pins;
      score += pins;
      board[curBowl].score = score;
      secondBowl -= pins;
    }

    this.setState({
      board, score, secondBowl, curBowl,
    });
  }

  render() {
    const { score, board, secondBowl } = this.state;
    return (
      <div className="game">
        <Header />
        <Board board={board} />
        <div className="score">{score}</div>
        <Bowl secondBowl={secondBowl} bowl={this.bowl} />
      </div>
    );
  }
}

export default App;
