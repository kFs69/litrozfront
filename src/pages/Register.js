import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import injectSheet from 'react-jss';
import { cpfMask } from '../mask';

import Input from '../components/Input';
import Button from '../components/Button';

// import { Container } from './styles';
class Register extends Component {
  constructor(props){
    super(props);

    this.state = {
      nome: '',
      email: '',
      estadoCivil: '',
      endereco: '',
      telefone1: '',
      telefone2: '',
      telefone: {}, 
      cpf: ''
    }
    this.handleChange = this.handleChange.bind(this);
  } 
  
  handleChange(e, name){
    this.setState({[name]: e.target.value}, () => this.setState({ cpf: cpfMask(this.state.cpf) }));
    
    this.setState({ telefone: {tel1: this.state.telefone1, tel2: this.state.telefone2} });
  }

  cad(e){
    e.preventDefault();

    fetch('http://localhost:3001/register', { 
				method: 'post', 
				headers: { 'Content-type': 'application/json' }, 
				body: JSON.stringify({
          name: this.state.nome,
          email: this.state.email,
          meritalStatus: this.state.estadoCivil,
          address: this.state.endereco,
          phoneNumber: this.state.telefone,
          cpf: this.state.cpf
				})
				}).then((res) => {
					if(res.status == 200){
						alert('Cadastrado com sucesso');
						console.log(res.json());
					}else{
						alert('Erro ao cadastrar');
					}
			}).catch((err) => {
				alert('Ocorreu um erro no servidor \nErro:' + err);
			})
    }

  render() {
    return( 
      <div className={this.props.classes.container}>
        <div className={this.props.classes.boxRegister}>
          <h2>Register</h2>
          <form>
            <Input placeHolder="Nome" onChange={(e) => this.handleChange(e, "nome")} />
            <Input placeHolder="E-mail" onChange={(e) => this.handleChange(e, "email")} />
            <Input placeHolder="Estado Civil" onChange={(e) => this.handleChange(e, "estadoCivil")} />
            <Input placeHolder="Endereço" onChange={(e) => this.handleChange(e, "endereco")} />
            <Input placeHolder="Telefone" phone onChange1={(e) => this.handleChange(e, "telefone1")} onChange2={(e) => this.handleChange(e, "telefone2")} value={{tel1: this.state.telefone1, tel2: this.state.telefone2}} />
            <Input placeHolder="CPF" onChange={(e) => this.handleChange(e, "cpf")} value={this.state.cpf} />
            <div style={{display: "flex", justifyContent: "space-around"}}>
              <Button text="Registrar" onClick={(e) => this.cad(e)} />
              <Link to={`/admin`} className={this.props.classes.buttonReverse}>Dashboard</Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default injectSheet({
  container: {
    display: "flex",
    justifyContent: "space-around"
  },
  boxRegister: {
    borderRadius: 10,
    boxShadow: "0px 0px 10px 3px #ddd9ce",
    width: "35%",
    textAlign: "center",
    marginTop: "10%",
    border: "1px solid #000",
    paddingBottom: "15px",
    paddingTop: "10px" 
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
})(Register)