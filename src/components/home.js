import React, { Component } from 'react';
import Button from './common/button';
import headerImg from '../img/lowlitlibrary.jpg';

class Home extends Component {

    render() {
        console.log(this.props);
        return (
            <div>
                <header style={ styles.headerStyle } className="header">
                    <div className="overlay" style={ styles.overlayStyle }></div>
                    <h1 style={ styles.titleStyle }>May I Have A Word</h1>
                    <h3 style={ styles.subTitleStyle }>Write and Access Your Stories Antyime, Anywhere</h3>
                    <div style={ styles.buttonContainerStyle }>
                        <Button link="writing" content="Start Writing"/>
                        <Button link="sign_in" content="Sign In"/>
                    </div>
                </header>
                <div style={ styles.bodyStyle }>
                </div>
            </div>
        )
    }
}

export default Home;

const styles = {
    headerStyle : {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${headerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed"
    },
    overlayStyle: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundImage: `linear-gradient(
            to bottom, 
            rgba(51, 51, 51, .7), 
            rgba(51, 51, 51, 1))`
    },
    titleStyle: {
        textTransform: "uppercase",
        position: "relative",
        margin: "1.5rem 1rem",
        fontSize: "5rem",
        color: "white",
    },
    subTitleStyle: {
        position: "relative",
        color: "white",
        margin: "1rem",
        fontSize: "1.5rem",
        fontWeight: "200"
    },
    buttonContainerStyle: {
        position: "relative",
        display: "flex",
        flexDirection: "row"
    },
    bodyStyle: {
        height: "150vh",
        backgroundColor: "#333"
    }
}