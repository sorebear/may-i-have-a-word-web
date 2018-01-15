import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextArea from './common/text_area';
import { titleChanged } from './actions';

class Writing extends Component {

    render() {
        console.log('Props at Writing Render', this.props);
        const { activeText, titleChanged } = this.props;
        return(
            <div className="container">
                <input 
                    value={ activeText.textArea1.title } 
                    onChange={(e) => titleChanged(e.target.value, "1")}
                />
                <TextArea number="1" />
            </div>
        ) 
    }
}

const mapStateToProps = (state) => {
    const { activeText } = state.text;
    return { activeText };
}

export default connect(mapStateToProps, { titleChanged })(Writing);