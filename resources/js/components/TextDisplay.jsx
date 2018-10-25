import React, { Component } from 'react';

class TextDisplay extends Component {
    
    onClick(e, props) {
        if (!props.canClick) { return; }
        e.preventDefault();
        let mouseButton = e.nativeEvent.which;
        
        if (mouseButton === 1) {
            // 左のとき
           props.forward(e.nativeEvent.target.textContent);
            
        } else if (mouseButton === 3){
            // 右のとき
            props.backward(e.nativeEvent.target.textContent);
            
        } else {
            // 左でも右でもないとき
            
        }
    }
    
    onChange(e, props) {
        e.stopPropagation();
    }
    
    onChange(e, props) {
        /*
        console.log("onChange!");
        console.log(e.nativeEvent.target.textContent);
        console.log(props);
        */
    }
    
    render() {
        if ( this.props.readonly ) {
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
        } else {
            return(
                <textarea
                    className={'form-control'}
                    placeholder={ this.props.placeholder }
                    readOnly={ this.props.readonly }
                    value={ this.props.text }
                    onChange={ (e)=>this.onChange(e, this.props) }
                    onClick={ (e)=>this.onClick(e, this.props) }
                    onContextMenu={ (e)=>this.onClick(e, this.props) }>
                </textarea>
            );
        }

    }
}

export default TextDisplay;