import React, { Component } from 'react';
import Button from './common/button';
import headerImg from '../img/lowlitlibrary.jpg';

class Home extends Component {

    render() {
        console.log(this.props);
        return (
            <div className="container">
            <header style={ styles.headerStyle } className="header">
                <h1 style={ styles.titleStyle }>May I Have A Word</h1>
                <h3 style={ styles.subTitleStyle }>Write and Access Your Stories Antyime, Anywhere</h3>
                <div style={ styles.buttonContainerStyle }>
                    <Button link="writing" content="Start Writing"/>
                    <Button link="sign_in" content="Sign In"/>
                </div>
            </header>
                <div style={ styles.bodyStyle }>`
                </div>`
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
        backgroundImage: `linear-gradient(
            to bottom, 
            rgba(0, 0, 0, .5), 
            rgba(0, 0, 0, .8)), 
            url(${headerImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed"
    },
    titleStyle: {
        textTransform: "uppercase",
        margin: "1.5rem 1rem",
        fontSize: "5rem",
        color: "white",
    },
    subTitleStyle: {
        color: "white",
        margin: "1rem",
        fontSize: "1.5rem",
        fontWeight: "200"
    },
    buttonContainerStyle: {
        display: "flex",
        flexDirection: "row"
    },
    bodyStyle: {
        height: "150vh",
        backgroundColor: "#333"
    }
}