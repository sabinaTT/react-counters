import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
    };

    increaseCount = () => {
        let moreCount = this.state.count + 1;
        this.setState({
            count: moreCount,
        });
    };
    decreaseCount = () => {
        let lessCount = this.state.count - 1;
        this.setState({
            count: lessCount,
        });
    };

    render() {
        return (
            <div className="Counter">
                <h4>Counter: {this.state.count}</h4>
                {/* <button>Decrement</button> */}
                <button onClick={this.decreaseCount}>Decrement</button>
                {/* <button>Increment</button> */}
                <button onClick={this.increaseCount}>Increment</button>
            </div>
        );
    };
};

export default Counter;