import React, { Component } from 'react';
import { connect } from 'react-redux';
import { letterTyped } from '../actions';

class TextArea extends Component {
    constructor(props) {
        super(props);
        this.domElement = null;
    }

    componentDidMount() {
        const { number } = this.props;
        this.domElement = document.getElementById(`textarea-${number}`);
    }

    handleKeyPress(e) {
        this.props.letterTyped(e.target.value, this.props.number);
    }

    handleReturn(e) {
        if (e.keyCode === 13 || e.which === 13) {
            e.preventDefault();
            const { text } = this.props;
            const cursorLocation = this.domElement.selectionEnd;
            const modText = 
                text.slice(0, cursorLocation) + '\n\n    ' +
                text.slice(cursorLocation);
            this.props.letterTyped(modText, this.props.number);
            setTimeout(() => {
                this.domElement.selectionEnd = cursorLocation + 6;
            }, 250)
        } 
    }

    render() {
        console.log("Text at Props", this.props);
        const { number, activeText } = this.props;
        return (
            <textarea
                id={`textarea-${number}`}
                style={styles.textAreaStyle}
                value={activeText[`textArea${number}`].text }
                onChange={(e) => this.handleKeyPress(e)}
                onKeyDown={(e) => this.handleReturn(e)}
            ></textarea>
        )
    }
}

const mapStateToProps = state => {
    const { activeText } = state.text;
    return { activeText };
}

export default connect(mapStateToProps, { letterTyped })(TextArea);

const styles = {
    textAreaStyle: {
        height: "100%",
        padding: "0 .5rem",
        fontSize: "1.8rem",
        backgroundColor: "#eee",
        border: "none",
        outline: "none",
        resize: "none",
    }
}