// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component{

    findXAndY = (e) => {
        
        const array = [e.clientX, e.clientY]
        return this.props.onReceiveCoordinates(array)
    }
    render(){
        return(
            <button onClick={this.findXAndY}/>
        )
    }
}

export default CoordinatesButton