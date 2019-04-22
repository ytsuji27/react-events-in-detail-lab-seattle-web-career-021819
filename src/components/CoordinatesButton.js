import React from 'react';

class CoordinatesButton extends React.Component {

  handleClick = (ev) => {
    let arr = [ev.clientX, ev.clientY];
    this.props.onReceiveCoordinates(arr);
  }

  render() {
    return <button onClick={this.handleClick} />
  }

}

export default CoordinatesButton;
