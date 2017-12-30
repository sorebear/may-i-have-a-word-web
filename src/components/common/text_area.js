import React, { Component } from 'react';
import { connect } from 'react-redux';
import { letterTyped, setDomReference, createNewTextArea } from '../actions';

class TextArea extends Component {

    componentDidMount() {
        for (let index = 0; index < this.props.textAreaArray.length; index++) {
            this.addDomReference(index);
        }
    }

    addDomReference(index) {
        this.props.setDomReference(document.getElementById(`textarea-${index}`), index)
    }

    handleKeyPress(e, index) {
        this.props.letterTyped(e.target.value, index);
    }

    handleReturn(e, index) {
        e.preventDefault();
        if (e.keyCode === 13 || e.which === 13) {
            e.preventDefault();
            this.props.createNewTextArea(index);
        }
    }

    calculateRows(index) {
        if (this.props.textAreaArray[index].el) {
            return this.props.textAreaArray[index].el.scrollHeight / 39
        }
        return 1;
    }

    renderTextAreaArray() {
        return this.props.textAreaArray.map((item, index) => {
            // if (!item.el) {
            //     this.addDomReference(index);
            //     console.log(`Item number ${index} does not have a DOM reference.`);
            // }
            return (
                <textarea
                    id={`textarea-${index}`}
                    key={index}
                    rows={this.calculateRows(index)}
                    style={styles.textAreaStyle}
                    value={ item.text }
                    onChange={(e) => this.handleKeyPress(e, index)}
                    onKeyUp={(e) => this.handleReturn(e, index)}
                >
                </textarea>
            )
        })
    }

    render() {
        console.log("Props at Render", this.props);
        return (
            <div>
                {this.renderTextAreaArray()}
                <textarea>
                
                </textarea>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { textAreaArray } = state.text;
    return { textAreaArray };
}

export default connect(mapStateToProps, { letterTyped, setDomReference, createNewTextArea })(TextArea);

const styles = {
    textAreaStyle: {
        height: "unset",
        padding: "0 .5rem",
        fontSize: "1.8rem",
        backgroundColor: "#eee",
        border: "none",
        outline: "none",
        resize: "none",

    }
}