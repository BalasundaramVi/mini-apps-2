import React from 'react';

class Bowl extends React.Component {
  constructor(props) {
    super(props);

    this.numPins = this.numPins.bind(this);

    this.state = {
      pins: 0,
    };
  }

  numPins(e) {
    this.setState({ pins: Number(e.target.value) });
  }


  render() {
    const { pins } = this.state;
    const { bowl, secondBowl } = this.props;
    return(
      <div className="player_input">
        <input type="number" min="0" max={secondBowl} name="knock" onChange={this.numPins} />
        <div className="bowl_button" onClick={() => { bowl(pins); }}>BOWL</div>
      </div>
    );
  }
}

export default Bowl;
