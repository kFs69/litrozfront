import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectSheet from 'react-jss';
import { Link } from 'react-router-dom';

import Input from './Input';
import Button from './Button';

class Table extends Component {
    state = {
      data: [],
      idToDelete: null,
      search: ""
    }

  getDataFromDb = () => {
    fetch('http://localhost:3001/admin')
      .then((data) => data.json())
      .then((res) => this.setState({ data: res }));
  };

  handleChange(e){
    this.setState({ search: e.target.value });
  } 

  componentWillMount(){
    this.getDataFromDb();
  } 

  deleteFromDB = (idTodelete) => {
    fetch(`http://localhost:3001/delete/${idTodelete}`, {
      method: 'delete',
    }).then((res) => {
      if(res.status == 200){
        alert('Deletado com sucesso');
        let newArray = this.state.data.filter(e => e._id != idTodelete);
        this.setState({data: newArray});
      }else{
        alert('Ocorreu um erro ao cadastrar!');
      }
    }).catch((err) => {
      alert('Ocorreu um erro no servidor \nErro:' + err);
    })    
  };

  render() {

    const { search, data } = this.state;
    const filteredClients = data.filter( client => {
      return client.cpf.toLowerCase().indexOf( search.toLowerCase()) !== -1
    }) 

    return (
      <div style={{width: "70%"}}>
          <a href="/register">Novo Cliente</a>
          <Input value={this.state.search} onChange={(e) => this.handleChange(e)} placeHolder="Search" search/>
        <table style={{width: "100%"}}>
          <thead style={{width: "100%"}}>
            <tr className={this.props.classes.head}>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Estado Civil</th>
              <th>Endereço</th>
              <th>Telefone</th>
              <th>CPF</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className={this.props.classes.tBody}> 

            {filteredClients.map((client) => {
            return(
              
                <tr key={client._id} className={this.props.classes.trBody}>
                  <td style={{width: "12%"}}>{client.name}</td>
                  <td style={{width: "20.5%"}}>{client.email}</td>
                  <td style={{width: "10%"}}>{client.meritalStatus}</td>
                  <td style={{width: "16.5%"}}>{client.address}</td>
                  <select style={{width: "12%"}}>
                    <option>{client.phoneNumber.tel1}</option>
                    <option>{client.phoneNumber.tel2}</option>
                  </select>
                  <td style={{width: "10%"}}>{client.cpf}</td>
                  <div style={{width: "9%", display: "flex", justifyContent: "space-around"}}>
                    <button onClick={() => this.deleteFromDB(client._id)}>Delete</button>
                    <Link to={`/update/${client._id}`}>Edit</Link>
                  </div>    
                </tr>
            )
            })}
          </tbody>
        </table>
      </div>
    )
  }
}

export default injectSheet({
  head:{
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1px solid #000",
    paddingBottom: "-10px",

  },
  tBody: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  },
  trBody:{
    width: "100%",
    display: "flex",
    paddingBottom: "10px",
    paddingTop: "5px",
    borderBottom: "1px solid #b5b5b5",
    justifyContent: "space-between",
    marginBottom: "10px",
    alignItems: "center"
  }
})(Table)