import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

class PromptDisplay extends Component {
    
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
                <Button variant="contained" color="primary" onClick={ (e)=>this.props.onYes() }>Yes</Button>
                <Button variant="contained" color="primary" onClick={ (e)=>this.props.onNo(e, this.props) }>No</Button>
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