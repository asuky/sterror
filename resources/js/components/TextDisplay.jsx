import React, { Component } from 'react';


class TextDisplay extends Component {
    
    render() {
        console.log(this.props.props);
        return(
            <textarea className={'form-control'} placeholder={ this.props.placeholder } readOnly={ this.props.readonly }>{ this.props.text }</textarea>
        );
    }
}

export default TextDisplay;