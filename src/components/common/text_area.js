import React, { Component } from 'react';
import { connect } from 'react-redux';
import { letterTyped } from '../actions';

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.domElement = null;
    }

    componentDidMount() {
        this.domElement = document.getElementById('textarea');
    }

    // Change the Textarea back to one input
    // Everytime text is modified by javascript, first get 'selectionStart' and 'selectionEnd'
    // Reset the the selectionStart and selectionEnd to the saved values after modifiction

    handleKeyPress(e) {
        this.props.letterTyped(e.target.value);
    }

    handleReturn(e) {
        const { text } = this.props;
        const cursorLocation = this.domElement.selectionEnd;
        if (e.keyCode === 13 || e.which === 13) {
            const modText = 
                text.slice(0, cursorLocation) + '\n    ' +
                text.slice(cursorLocation);
            this.props.letterTyped(modText);
            setTimeout(() => {
                this.domElement.selectionEnd = cursorLocation + 5;
            }, 2000)
            
        }
    }

    render() {
        console.log("Props at Render", this.props);
        return (
            <textarea
                id='textarea'
                style={styles.textAreaStyle}
                value={ this.props.text }
                onChange={(e) => this.handleKeyPress(e)}
                onKeyUp={(e) => this.handleReturn(e)}
            ></textarea>
        )
    }
}

const mapStateToProps = state => {
    const { text } = state.text;
    return { text };
}

export default connect(mapStateToProps, { letterTyped })(TextArea);

const styles = {
    textAreaStyle: {
        height: "100vh",
        padding: "0 .5rem",
        fontSize: "1.8rem",
        backgroundColor: "#eee",
        border: "none",
        outline: "none",
        resize: "none",
    }
}