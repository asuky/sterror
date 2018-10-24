import React, { Component } from 'react';

import TextDisplay from './TextDisplay';
import PromptDisplay from './PromptDisplay';

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
                    <PromptDisplay
                        showDecision={ this.props.showDecision }
                        instruction={ this.props.instruction }
                        isRead={ this.props.isRead }
                        onYes={ this.props.onYes }
                        onNo={ this.props.onNo }
                        onEdit={ this.props.onEdit }
                        onQuit={ this.props.onQuit }
                    />
                </div>
        );
        
    }
}

export default MainUI;