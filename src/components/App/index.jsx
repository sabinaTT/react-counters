import React, { Component } from 'react';
import Header from './Header';
import CounterList from './CounterList';
import './App.css'

class App extends Component {
    constructor() {
        super();

        this.state = {
            counters: 0
        };
    };
    increaseCounters = () => {
        let addCounter = this.state.counters + 1;

        this.setState({
            counters: addCounter
        });
    };

    decreaseCounters = () => {
        let removeCounter = this.state.counters - 1;
        
        this.setState({
            counters: removeCounter
        });
    };

    render() {
        return (
            <div className="App">
                <Header increaseCounter={this.increaseCounters} decreaseCounter={this.decreaseCounters} />
                <CounterList counter={this.state.counters} />
            </div>
        )
    }
}

export default App;