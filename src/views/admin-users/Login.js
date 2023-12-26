import React, { Component } from "react";
import '../../styles.css'
import axios from 'axios';

const baseUrl = "http://localhost:9898/api/v1/usuarios";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        username: '',
        password: '',
      }
    };
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  iniciarSesion = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: { USERNAME: this.state.form.username, NAME: this.state.form.password }
      });

      if (response.data.length > 0) {
        alert("Usuario correcto");
        this.props.onLogin(); // Llama a la función proporcionada por el padre para manejar el inicio de sesión
      } else {
        alert("Usuario incorrecto");
      }
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input type="text" className="form-control" name="username" onChange={this.handleChange} />
            <label>Contraseña: </label>
            <br />
            <input type="password" className="form-control" name="password" onChange={this.handleChange} />
            <br />
            <button className="btn btn-primary" onClick={this.iniciarSesion}>Iniciar Sesión</button>
          </div>
        </div>
      </div>
    );
    
  }
}

export default Login;

