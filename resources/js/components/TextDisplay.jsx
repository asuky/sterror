import React, { Component } from 'react';

class TextDisplay extends Component {
    
    onClick(e, props) {
        if (!props.canClick) { return; }
        
        e.preventDefault();        
        let mouseButton = e.nativeEvent.which;
        
        if (mouseButton === 1) {
            // 左のとき
           props.forward();
            
        } else if (mouseButton === 3){
            // 右のとき
            props.backward();
            
        } else {
            // 左でも右でもないとき
            
        }
    }
    render() {
        return(
            <textarea
                className={'form-control'}
                placeholder={ this.props.placeholder }
                readOnly={ this.props.readonly }
                
                value={ this.props.text }
                onClick={ (e)=>this.onClick(e, this.props) }
                onContextMenu={ (e)=>this.onClick(e, this.props) }>
            </textarea>
        );
    }
}

export default TextDisplay;