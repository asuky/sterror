import React, { Component } from 'react';
import TextDisplay from './TextDisplay';


class MainUI extends Component {
    
    render() {
        
        return (
                <div>
                    <TextDisplay props={ this.props } />
                </div>
        );
        
    }
}

export default MainUI;