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
      curFrame: 0,
      board: buildInitialBoard(),
      score: 0,
      secondBowl: 10,
      strike: [],
      game: true,
    };
  }

  // bowl(p) {
  //   let pins = p;
  //   const { board, strike } = this.state;
  //   let {
  //     score, secondBowl, curBowl, game,
  //   } = this.state;

  //   if (game === false) {
  //     return;
  //   }

  //   for (let i = 0; i < strike.length; i += 1) {
  //     board[strike[i].curBowl].score += pins;
  //     score += pins;
  //     if (strike[i].done === false) {
  //       strike[i].done = true;
  //     } else {
  //       strike.splice(i, 1);
  //     }
  //   }
  //   if (curBowl > 9) {
  //     curBowl = 9;
  //   }
  //   if (board[curBowl].firstBowl === -1) {
  //     if (pins === 10) {
  //       if (curBowl === 9) {
  //         board[curBowl].firstBowl = 'X';
  //         board[curBowl].score = score + pins;
  //         strike.push({ curBowl, done: false });
  //         board[9].thirdBowl = -1;
  //       } else {
  //         board[curBowl].secondBowl = 'X';
  //         board[curBowl].score = score + pins;
  //         strike.push({ curBowl, done: false });
  //       }
  //       curBowl += 1;
  //     } else {
  //       board[curBowl].firstBowl = pins;
  //       secondBowl -= pins;
  //       board[curBowl].score = score + pins;
  //     }
  //     score += pins;
  //   } else {
  //     if (board[curBowl].firstBowl + pins >= 10) {
  //       pins = 10 - board[curBowl].firstBowl;
  //       score += pins;
  //       pins = '/';
  //       strike.push({ curBowl, done: true });
  //     } else {
  //       score += pins;
  //     }

  //     if (curBowl === 9 && board[9].secondBowl === -1) {
  //       board[curBowl].secondBowl = pins;
  //       if (pins === 10) {
  //         board[curBowl.thirdBowl] = -1;
  //       }
  //     } else if (curBowl === 9 && board[9].secondBowl !== -1) {
  //       board[9].thirdBowl = pins;
  //       board[9].score += pins;
  //       game = false;
  //     } else {
  //       board[curBowl].secondBowl = pins;
  //       board[curBowl].score = score;
  //       curBowl += 1;
  //       secondBowl = 10;
  //     }
  //   }

  //   this.setState({
  //     board, score, secondBowl, curBowl, game,
  //   });
  // }

  bowl(knockedPins) {
    let pins = knockedPins;
    const { board, strike } = this.state;
    let {
      score, secondBowl, curFrame, game,
    } = this.state;

    if (game === false) {
      return;
    }

    // HANDLE PREVIOUS STRIKES
    console.log(strike);
    for (let i = 0; i < strike.length; i += 1) {
      score += pins;
      board[strike[i].curFrame].score += pins;
      if (strike[i].done) {
        strike.splice(i, 1);
        i -= 1;
      } else {
        strike[i].done = true;
      }
    }

    // HANDLE CURRENT FRAME/SCORE
    const current = board[curFrame];
    if (curFrame === 9) {
      if (current.firstBowl === -1) {
        if (pins === 10) {
          current.firstBowl = 'X';
          strike.push({ curFrame, done: false });
          current.thirdBowl = -1;
        } else {
          current.firstBowl = pins;
        }
        current.score = score + pins;
      } else if (current.firstBowl !== 'X' && current.secondBowl === -1) {
        if (current.firstBowl + pins >= 10) {
          pins = 10 - current.firstBowl;
          current.secondBowl = '/';
          current.thirdBowl = -1;
        } else {
          current.secondBowl = pins;
          game = false;
        }
        current.score += pins;
      } else if (current.firstBowl === 'X' && current.secondBowl === -1) {
        if (pins === 10) {
          current.secondBowl = 'X';
        } else {
          current.secondBowl = pins;
        }
        current.score += pins;
      } else if (current.secondBowl === 'X') {
        if (pins === 10) {
          current.thirdBowl = 'X';
        } else {
          current.thirdBowl = pins;
        }
        current.score += pins;
      } else {
        if (current.secondBowl + pins >= 10) {
          pins = 10 - current.secondBowl;
          current.thirdBowl = '/';
        } else {
          current.thirdBowl = pins;
        }
        current.score += pins;
        game = false;
      }
      score += pins;
    } else if (current.firstBowl === -1) {
      if (pins === 10) {
        current.secondBowl = 'X';
        current.score = score + pins;
        strike.push({ curFrame, done: false });
        curFrame += 1;
      } else {
        current.firstBowl = pins;
        secondBowl -= pins;
        current.score = score + pins;
      }
      score += pins;
    } else {
      if (current.firstBowl + pins >= 10) {
        pins = 10 - current.firstBowl;
        current.secondBowl = '/';
        strike.push({ curFrame, done: true });
      } else {
        current.secondBowl = pins;
      }
      score += pins;
      secondBowl = 10;
      current.score = score;
      curFrame += 1;
    }
    
    this.setState({
      board, score, secondBowl, curFrame, game,
    });
  }

  render() {
    const { board, secondBowl } = this.state;
    return (
      <div className="game">
        <Header />
        <Board board={board} />
        <Bowl secondBowl={secondBowl} bowl={this.bowl} />
      </div>
    );
  }
}

export default App;
