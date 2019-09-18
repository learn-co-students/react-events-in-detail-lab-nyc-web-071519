// Code DelayedButton Component Here
import React from "react"

class DelayedButton extends React.Component{

    

    handleClick = e => {
        e.persist()
        // console.log(e)
        setTimeout(() => {
            this.props.onDelayedClick(e)
        }, this.props.delay)
    }

    render(){
        return(
            <button onClick = {this.handleClick}>
                Delayed Button
            </button>
        )
    }
}

export default DelayedButton