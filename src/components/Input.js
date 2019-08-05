import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';

class Input extends Component {
  render() {
    return (
      this.props.phone ?
      <div className={this.props.classes.coverPhone}>
        <input type="text" placeholder={this.props.placeHolder} value={'' || this.props.value.tel1} onChange={(e) => this.props.onChange1(e)} className={this.props.classes.inputPhone} required/>
        <input type="text" placeholder={this.props.placeHolder} value={'' || this.props.value.tel2} onChange={(e) => this.props.onChange2(e)} className={this.props.classes.inputPhone} required/>
      </div>
      :
      this.props.search ?
      <div className={this.props.classes.coverSearch}>
        <input type="text" placeholder={this.props.placeHolder} value={this.props.value} onChange={(e) => this.props.onChange(e)} className={this.props.classes.search} />
      </div>
      :
      <div className={this.props.classes.cover}>
        <input type="text" placeholder={this.props.placeHolder} required value={this.props.value}  onChange={(e) => this.props.onChange(e)} className={this.props.classes.input} />
      </div>
    )
  }
}

export default injectSheet({
  cover: {
    display: "flex",
    width: "100%",
    justifyContent: "center"
  },
  input: {
    border: "none",
    borderBottom: "1px solid rgb(237, 126, 45)",
    backgroundColor: "transparent",
    height: "23px",
    fontSize: "15px",
    width: "85%",
    marginBottom: 15,
    outline: "none"
  },
  coverPhone:{
    width: "100%",
    display: "flex",
    justifyContent: "space-around",
    flexDirection: "row"
  },
  inputPhone: {
    width: "35%",
    border: "none",
    borderBottom: "1px solid rgb(237, 126, 45)",
    backgroundColor: "transparent",
    height: "23px",
    fontSize: "15px",
    marginBottom: 15,
    outline: "none"
  },
  coverSearch:{
    display: "flex",
    justifyContent: "flex-end"
  },
  search: {
    display: "flex",
    width: "50%",
  }
})(Input)