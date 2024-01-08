import axios from 'axios';
import { FormUsuario, RecuperaPass } from 'components/User';
import { useEffect, useState } from 'react';
import { NotificationManager } from 'react-notifications';
import { usePostUserMutation } from 'state/api/usuarioApi';
import logoAnicia from '../../assets/images/logoAnicia.png';
import '../../styles.css';
import { useGetUsersQuery } from "state/api/usuarioApi";

const baseUrl = "http://localhost:9898/api/v1/usuarios";

const Login = (props) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const [postUser, { data: newUserData, isSuccess: isPostUserSuccess, isLoading: isPostUserLoading }] = usePostUserMutation();
  const [showCreateUserForm, setShowCreateUserForm] = useState(false);
  const [showPasswordRecoveryForm, setShowPasswordRecoveryForm] = useState(false);
  const { isLoading, data: userData, isError } = useGetUsersQuery();
  const [userCreated, setUserCreated] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const iniciarSesion = async () => {
    try {
      const response = await axios.get(baseUrl, {
        params: { USERNAME: form.username, PASSWORD: form.password },
      });

      if (response.data.length > 0) {
        alert("Usuario correcto");
        const usuarioRegistrado = response.data[0];
        props.onLogin(usuarioRegistrado);
      } else {
        alert("Usuario incorrecto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const recuperarContraseña = () => {
    setShowPasswordRecoveryForm(true);
  };

  const ocultarFormularioCrearUsuario = () => {
    setShowCreateUserForm(false);
  };

  const ocultarFormularioRecuperarContraseña = () => {
    setShowPasswordRecoveryForm(false);
  };

  useEffect(() => {
    if (newUserData && isPostUserSuccess) {
      NotificationManager.success("Usuario creado correctamente");
      setUserCreated(true);
    }
  }, [newUserData, isPostUserSuccess]);

  const postUserHandler = (formData) => {
    postUser(formData);
  };

  useEffect(() => {
    if (userCreated) {
      // Si el usuario se ha creado con éxito, oculta el formulario de creación de usuario y restablece el estado
      ocultarFormularioCrearUsuario();
      setUserCreated(false);
    }
  }, [userCreated]);

  return (
    <div className="containerPrincipal" style={{ backgroundColor: '#A2BFE6',  border: 'none' }}>
      <div className="containerSecundario">
      <img src={logoAnicia} alt="Logo de la aplicación" className="logo mb-4" />
        <div className="form-group" >
          {showCreateUserForm ? (
            <div>
              <div className='pageContainer' style={{ borderRadius: '20px' }}>
                <FormUsuario.FormUser isEditing={false} onSubmit={postUserHandler}  />
              </div>
              <button className="btn btn-danger" onClick={ocultarFormularioCrearUsuario}>
                Cancelar
              </button>
            </div>
          ) : showPasswordRecoveryForm && (
            <RecuperaPass.FormRecuperaPass onBackToLogin={ocultarFormularioRecuperarContraseña} />
          )}
          {!showCreateUserForm && !showPasswordRecoveryForm && (
            <div>
             <label>Usuario </label>
            <br />
            <input type="text" className="form-control mb-4" name="username" onChange={handleChange} />
            <label>Contraseña </label>
            <br />
            <input type="password" className="form-control" name="password" onChange={handleChange} />
          
        <div className='my-2'>
          <button className="btn btn-primary" onClick={iniciarSesion}>
            Iniciar Sesión
          </button>
          <div className="my-2"></div> {/* Agregado espacio vertical */}
          <button className="btn btn-outline-warning" onClick={recuperarContraseña}>
            Recuperar Contraseña
          </button>
          <div className="my-2"></div> {/* Agregado espacio vertical */}
          <button className="btn btn-success" onClick={() => setShowCreateUserForm(true)}>
            Crear Usuario
          </button>
        </div>
        </div>)}
            </div>
        </div>
      </div>
  );
};

export default Login;
