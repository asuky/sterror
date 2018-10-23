import React, { Component } from 'react';
import TextDisplay from './TextDisplay';


class MainUI extends Component {
    
    render() {
        return (
                <div>
                    <TextDisplay
                        placeholder={ this.props.placeholder }
                        readonly={ this.props.readonly }
                        text={ this.props.text }
                        canClick={ this.props.canClick }
                        forward={ this.props.forward }
                        backward={ this.props.backward }
                    />
                </div>
        );
        
    }
}

export default MainUI;