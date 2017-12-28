import React, { Component } from 'react';
import { connect } from 'react-redux';
import { navigationChanged } from '../actions';

class Button extends Component {

    render() {
        console.log(this.props.navigationChanged);
        const { content, link, navigationChanged } = this.props;
        return (
            <button 
                style={styles.buttonStyle} 
                onClick={() => navigationChanged(link) }
            >
                { content }
            </button>
        )
    }
}

export default connect(null, { navigationChanged })(Button);

const styles = {
    buttonStyle: {
        padding: "1rem 2rem",
        margin: "1rem",
        border: "none",
        borderRadius: "3px",
        fontSize: "1rem",
        outline: "none",
        backgroundImage: "linear-gradient(rgba(25, 110, 22, .8), rgba(100, 150, 50, .8))",
        color: "white"

    }
}
