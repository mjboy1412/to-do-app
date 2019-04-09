import React from 'react';

class Calculator extends React.Component {
    state = {
        match : this.props.match,
    }
    render(){
        console.log(this.state.match)
        return(
            <div>
                <h1>Calculator</h1>
                <p>building...</p>
            </div>
        );
    }
}
export default Calculator;
