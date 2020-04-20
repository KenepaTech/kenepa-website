import React, { Component } from 'react';
import Clock from '../components/Clock';

import '../components/Home.scss';


export default class Home extends Component {
    render() {
        return (
            <div>
                <Clock />
                <section id="landing">
                <p className="welcome">Welcome to Kenepa Tech!</p>
                    <p>
                        We are a dedicated group of young professionals and students from the ABC-islands
                        that excel at using a multi-disciplinary approach with the latest stable technologies
                        to provide customers with innovative solutions for their businesses and/or projects.
                        Enjoy your stay, and feel free to contact us
                        with any questions about our services.
                    </p>
                </section>
            </div>
        )
    }
}
