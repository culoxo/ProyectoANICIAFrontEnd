/*import axios from 'axios';
import { FormUsuario } from 'components/User';
import React, { useState, useEffect } from 'react';
import logoAnicia from '../../assets/images/logoAnicia.png';
import '../../styles.css';
import { useGetUsersQuery } from 'state/api/usuarioApi';

const baseUrl = 'http://localhost:9898/api/v1/usuarios';

const Login = () => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [showCreateUserForm, setShowCreateUserForm] = useState(false);
  const { isLoading, data: userData, isError } = useGetUsersQuery();

  useEffect(() => {
    // Puedes realizar acciones adicionales cuando userData cambia
    console.log('UserData changed:', userData);
  }, [userData]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const iniciarSesion = async () => {
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

  const recuperarContraseña = () => {
    alert('Recuperación de contraseña en construcción');
  };

  const mostrarFormularioCrearUsuario = () => {
    setShowCreateUserForm(true);
  };

  const ocultarFormularioCrearUsuario = () => {
    setShowCreateUserForm(false);
  };

  const postUserHandler = async (formData) => {
    try {
      const response = await axios.post(baseUrl, formData);
      console.log(response.data);

      alert('Usuario creado correctamente');
      ocultarFormularioCrearUsuario();
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="containerPrincipal">
      <div className="containerSecundario">
        <img src={logoAnicia} alt="Logo de la aplicación" className="logo" />
        <div className="form-group">
          {showCreateUserForm ? (
            <div>
              {/* Renderiza el componente de formulario de creación de usuario }
              <FormUsuario.FormUser isEditing={false} onSubmit={postUserHandler} />
              <button className="btn btn-danger" onClick={ocultarFormularioCrearUsuario}>
                Cancelar
              </button>
            </div>
          ) : (
            <div>
              {/* Renderiza los campos de inicio de sesión solo si showCreateUserForm es false }
              <label>Usuario: </label>
              <br />
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={handleChange}
              />
              <label>Contraseña: </label>
              <br />
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
              />
              <br />
              <button className="btn btn-primary" onClick={iniciarSesion}bgb>
                Iniciar Sesión
              </button>
              <button className="btn btn-link" onClick={recuperarContraseña}>
                Recuperar Contraseña
              </button>
              <button
                className="btn btn-success"
                onClick={mostrarFormularioCrearUsuario}
              >
                Crear Usuario Nuevo
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;

*/
import axios from 'axios';
import { FormUsuario } from 'components/User';
import { useState } from 'react';
import { usePostUserMutation } from 'state/api/usuarioApi';
import logoAnicia from '../../assets/images/logoAnicia.png';
import '../../styles.css';

const baseUrl = "http://localhost:9898/api/v1/usuarios";

const Login = (props) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [showCreateUserForm, setShowCreateUserForm] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const iniciarSesion = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: { USERNAME: form.username, NAME: form.password },
      });

      if (response.data.length > 0) {
        alert("Usuario correcto");
        props.onLogin();
      } else {
        alert("Usuario incorrecto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const recuperarContraseña = () => {
    alert('Recuperación de contraseña en construcción');
  };

  const mostrarFormularioCrearUsuario = () => {
    setShowCreateUserForm(true);
  };

  const ocultarFormularioCrearUsuario = () => {
    setShowCreateUserForm(false);
  };

  const [postUser, { data: newUserData, isSuccess: isPostUserSuccess, isLoading: isPostUserLoading }] = usePostUserMutation();

  // useEffect(() => {
  //     if (newUserData && isPostUserSuccess) {
  //         NotificationManager.success("Usuario creado correctamente");
  //         navigate("/usuarios");
  //     }
  // }, [newUserData, isPostUserSuccess, navigate]);

  const postUserHandler = (formData) => {
      postUser(formData);
  };


  return (
    <div className="containerPrincipal">
      <div className="containerSecundario">
        <img src={logoAnicia} alt="Logo de la aplicación" className="logo" />
        <div className="form-group">
          {showCreateUserForm ? (
            <div>
              {/* Renderiza el componente de formulario de creación de usuario */}
              <div className='pageContainer'>
                <FormUsuario.FormUser isEditing={false} onSubmit={postUserHandler} />
              </div>
              <button className="btn btn-danger" onClick={ocultarFormularioCrearUsuario}>
                Cancelar
              </button>
            </div>
          ) : (
            <div>
              {/* Renderiza los campos de inicio de sesión solo si showCreateUserForm es false*/}
              <label>Usuario: </label>
              <br />
              <input type="text" className="form-control" name="username" onChange={handleChange} />
              <label>Contraseña: </label>
              <br />
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
              />
            </div>
          )}
          <button className="btn btn-primary" onClick={iniciarSesion}>
            Iniciar Sesión
          </button>
          <button className="btn btn-link" onClick={recuperarContraseña}>
            Recuperar Contraseña
          </button>
          <button className="btn btn-success" onClick={mostrarFormularioCrearUsuario}>
            Crear Usuario
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

