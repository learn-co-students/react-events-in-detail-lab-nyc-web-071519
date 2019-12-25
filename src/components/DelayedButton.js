// Code DelayedButton Component Here
import React, {Component} from 'react'


class DelayedButotn extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {  }
    // }

    handleClick = event => {
        event.persist()
        setTimeout(() => {
            this.props.onDelayedClick(event)},
                this.props.delay)
        
    }



    render() { 
        return ( 
            <button onClick={this.handleClick}>
                Delay Button
            </button>
         );
    }
}
 
export default DelayedButotn;