import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';

import Input from '../components/Input';
import Button from '../components/Button';
import Table from '../components/Table';

// import { Container } from './styles';
class Admin extends Component {
  render() {
    return( 
      <div className={this.props.classes.container}>
        <Table />
      </div>
    )
  }
}

export default injectSheet({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-around",

  },

})(Admin)