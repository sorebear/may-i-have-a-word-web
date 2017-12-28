import React, { Component } from 'react';
import headerImg from '../img/lowlitlibrary.jpg';

class Home extends Component {

    render() {

        return (
            <header style={ styles.headerStyle } className="header">
                <h1 style={ styles.titleStyle }>May I Have A Word</h1>
                <h3 style={ styles.subTitleStyle }>Write and Access Your Stories Antyime, Anywhere</h3>
            </header>
        )
    }
}

export default Home;

const styles = {
    headerStyle : {
        width: "100vw",
        height: "80vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `linear-gradient(
            to bottom, 
            rgba(0, 0, 0, .5), 
            rgba(0, 0, 0, .8)), 
            url(${headerImg})`,
        backgroundSize: "cover"
    },
    titleStyle: {
        textTransform: "uppercase",
        color: "white",
    },
    subTitleStyle: {
        color: "#aaa",
        fontWeight: "200"
    }
}