import React, { Component } from 'react';

class PromptDisplay extends Component {
    
    onYes(e, props) {
        //dispatch affirmative post
        
    }
    
    onNo(e, props) {
        // edit mode
    }
    
    onEdit(e, props) {
        
    }
    
    onQuit(e, props) {
        
    }
    
    render() {
        if ( this.props.onImprove && this.props.isRead) {
            return(
            <div className={ this.props.promptClass }>
                <p>Question</p>
                <button onClick={ (e)=>this.onEdit(e, this.props) }>今のページを編集する</button>
                <button onClick={ (e)=>this.onQuit(e, this.props) }>編集を終了する</button>
            </div>
            );
        } else if ( this.props.isRead ) {
            return(
            <div className={ this.props.promptClass }>
                <p>Question</p>
                <button onClick={ (e)=>this.props.onYes() }>Yes</button>
                <button onClick={ (e)=>this.onNo(e, this.props) }>No</button>
            </div>
            );
        } else {
            return(
                    <div>{ this.props.instruction }</div>
            );
        }
        
    }
    
}

export default PromptDisplay;