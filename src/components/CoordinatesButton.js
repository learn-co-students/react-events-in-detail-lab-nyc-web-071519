import React from "react";

class CoordinatesButton extends React.Component {
  handleButton = event => {
    console.log(event);
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleButton}>CoordinatesButton</button>
      </div>
    );
  }
}

export default CoordinatesButton;
