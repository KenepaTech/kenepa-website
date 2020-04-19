import React, { Component } from 'react';
import './Clock.scss';

export default class Clock extends Component {
    constructor(props) {
        super(props);

        this.state = {
            time: new Date(),
            hour: new Date().getHours()
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

    greet() {
        
    }

    render() {
        return (
            <section className="Time">
                <h1>{this.state.hour < 19 ? `Bondia!` : `Bonochi!` }</h1>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </section>
        );
    }
}
