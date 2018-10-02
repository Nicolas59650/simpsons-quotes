import React, { Component } from 'react';

class working extends Component {
  handleClick = () => {
    console.log('Button clicked');
    this.setState({ on: !this.state.on });
  };
  constructor(props) {
    super(props);
    this.state = {
      on: props.on
    };
  }
  render() {
    const light = this.state.on ? 'True' : 'False';
    return (
      <div className="Lamp">
        <button 
          onClick={this.handleClick}
        className={light}
        >
        {light.toUpperCase()}
        </button>
        <figure className={light} />
      </div>
    );
  }
}
export default working;