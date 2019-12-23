// Code CoordinatesButton Component Here
import React, { Component } from 'react';

export default class CoordinatesButton extends Component {
    onReceiveCoordinates = (props) => {
        const mouseCoordinates = [props.clientX, props.clientY];
        console.log(mouseCoordinates);
    }

    render() {
        return (
            <button onClick={this.props.onReceiveCoordinates}/>
        );
    }
}
