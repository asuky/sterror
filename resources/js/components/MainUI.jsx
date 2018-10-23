import React, { Component } from 'react';
import TextDisplay from './TextDisplay';


class MainUI extends Component {
    
    render() {
        console.log(this.props);
        return (
                <div>
                    <TextDisplay
                        placeholder={ this.props.placeholder }
                        readonly={ this.props.readonly }
                        text={ this.props.text }
                        forward={ this.props.forward }
                        backward={ this.props.backward }
                    />
                </div>
        );
        
    }
}

export default MainUI;