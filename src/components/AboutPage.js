import React, { Component } from 'react';
import About from './About';
import Resume from './Resume';

class AboutPage extends Component {
    render() {
        return (
            <div>
                <About websiteUrl={this.props.websiteUrl}/>
                <Resume websiteUrl={this.props.websiteUrl} />
            </div>
        );
    }
}

export default AboutPage;