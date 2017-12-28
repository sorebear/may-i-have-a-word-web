import React from 'react';
import { connect } from 'react-redux';
import Home from './home';
import Writing from './writing';

const Router = props => {
    switch (props.currentNavPath) {
        case 'home':
            return <Home />;
        case 'writing':
            return <Writing />;
        default:
            return <Home />;
    }
}

const mapStateToProps = state => {
    const { currentNavPath } = state.nav;
    return { currentNavPath };
}

export default connect(mapStateToProps)(Router);