import React, { Component } from 'react';
import './Clock.scss';

// BEGIN Greeting block

let hour = new Date().getHours();

let greeting = `Bondia!`;

if (hour > 15 && hour < 19) {
    greeting = `Bontardi!`;
}

if (hour >= 19){
    greeting = `Bonochi!`;
}

// END Greeting block

export default class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date(),
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    

    render() {
        return (
            <section className="Time">
                <h1>{greeting}</h1>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </section>
        );
    }
}
