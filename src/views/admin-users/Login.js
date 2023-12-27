import axios from 'axios';
import { FormUsuario } from 'components/User';
import React from "react";
import logoAnicia from '../../assets/images/logoAnicia.png';
import '../../styles.css';

const baseUrl = "http://localhost:9898/api/v1/usuarios";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form: {
        username: '',
        password: '',
      },
      showCreateUserForm: false,
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

  recuperarContraseña = () => {
    alert("Recuperación de contraseña en construcción");
  }

  mostrarFormularioCrearUsuario = () => {
    this.setState({
      showCreateUserForm: true,
    });
  }

  ocultarFormularioCrearUsuario = () => {
    this.setState({
      showCreateUserForm: false,
    });
  }

  postUserHandler = async (formData) => {
    try {
      const response = await axios.post(baseUrl, formData);
      console.log(response.data);

      alert("Usuario creado correctamente");
      this.ocultarFormularioCrearUsuario();
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    return (
      <div className="containerPrincipal">
        <div className="containerSecundario">
          <img src={logoAnicia} alt="Logo de la aplicación" className="logo" />
          <div className="form-group">
            {this.state.showCreateUserForm ? (
              <div>
                {/* Renderiza el componente de formulario de creación de usuario */}
                <FormUsuario.FormUser isEditing={false} onSubmit={this.postUserHandler} />
                <button
                  className="btn btn-danger"
                  onClick={this.ocultarFormularioCrearUsuario}
                >
                  Cancelar
                </button>
              </div>
            ) : (
              <div>
                {/* Renderiza los campos de inicio de sesión solo si showCreateUserForm es false */}
                <label>Usuario: </label>
                <br />
                <input type="text" className="form-control" name="username" onChange={this.handleChange} />
                <label>Contraseña: </label>
                <br />
                <input type="password" className="form-control" name="password" onChange={this.handleChange} />
                <br />
                <button className="btn btn-primary" onClick={this.iniciarSesion}>Iniciar Sesión</button>
                <button className="btn btn-link" onClick={this.recuperarContraseña}>Recuperar Contraseña</button>
                <button
                  className="btn btn-success"
                  onClick={this.mostrarFormularioCrearUsuario}
                >
                  Crear Usuario Nuevo
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
