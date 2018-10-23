import React, { Component } from 'react';

class TextDisplay extends Component {
    
    onClick(e, props) {
        console.log("TextDisplay onClick");
        console.log(props);
        if (props.canClick) {
            
        }
    }
    render() {
        console.log(this.props);
        return(
            <textarea
                className={'form-control'}
                placeholder={ this.props.placeholder }
                readOnly={ this.props.readonly }
                defaultValue={ this.props.text }
                onClick={ (e)=>this.onClick(e, this.props) }>
            </textarea>
        );
    }
}

export default TextDisplay;