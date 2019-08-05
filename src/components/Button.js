import React, { Component } from 'react';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

class Button extends Component {
  render() {
    return (
      <button onClick={(e) => this.props.onClick(e)} className={this.props.type == 'ButtonDefault' ? this.props.classes.buttonDefault : this.props.classes.buttonReverse}>{this.props.text}</button>
    );
  }
}

export default injectSheet({
    buttonDefault: {
        padding: "7px 20px",
        border: "1px solid rgb(237, 126, 45)",
        backgroundColor: "transparent",
        borderRadius: 30,
        color: "#6E6E6E",
        fontSize: 16,
        fontWeight: 200,
        margin: 10,
        width: "40%",
        outlineStyle: "none",
        cursor: "pointer"
    },
    buttonReverse: {
      padding: "7px 20px",
        border: "1px solid rgb(237, 126, 45)",
        backgroundColor: "rgb(237, 126, 45)",
        borderRadius: 30,
        color: "#000",
        fontSize: 16,
        fontWeight: 200,
        margin: 10,
        width: "40%",
        outlineStyle: "none",
        cursor: "pointer"
    }
})(Button)