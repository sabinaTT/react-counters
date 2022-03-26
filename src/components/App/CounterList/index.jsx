import React, { Component } from 'react';
import Counter from './Counter';

class CounterList extends Component {
    render() {
        let counter = [];
        for(let i=0; i<this.props.counter; i++) {
            counter.push(<Counter />)
        }
        return <div className="counter-row">{counter}</div>
    }
}

export default CounterList;