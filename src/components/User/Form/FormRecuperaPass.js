import axios from 'axios';
import { useState } from 'react';
import { useUpdateUserMutation } from "../../../state/api/usuarioApi";

export const FormRecuperaPass = ({ onBackToLogin }) => {
  const [username, setUsername] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [newPassword, setNewPassword] = useState('');
  const [updateUser, { isSuccess: isUpdateUserSuccess, isLoading: isUpdateUserLoading }] = useUpdateUserMutation();
  const [message, setMessage] = useState('');
  const [userExists, setUserExists] = useState(false); // Nueva variable de estado

  const handleBackToLogin = () => {
    setUsername('');
    setSecurityQuestion('');
    setSecurityAnswer('');
    setNewPassword('');
    setShowPasswordField(false);
    setMessage('');
    setUserExists(false);
    onBackToLogin();
  };

  const baseUrl = "http://localhost:9898/api/v1/usuarios";

  const handleCheckUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(baseUrl, {
        params: { USERNAME: username },
      });

      if (response.data.length > 0) {
        setUserExists(true);
        setSecurityQuestion(response.data[0].preguntaSeg);
      } else {
        alert("Usuario incorrecto");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleRecoverPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(baseUrl, {
        params: { USERNAME: username },
      });

      // Verifica si la respuesta de seguridad coincide.
      if (securityAnswer === response.data[0].respuestaSeg) {
        setSecurityAnswer('');
        setShowPasswordField(true);
        setMessage('');
      } else {
        setMessage('Respuesta de seguridad incorrecta. Verifica tu respuesta.');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangePassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(baseUrl, {
        params: { USERNAME: username },
      });

      response.data[0].password = newPassword;
      // Actualiza la contraseña del usuario
      updateUser({ userId: String(response.data[0].id), updatedUser: response.data[0] });

      setMessage('Contraseña cambiada exitosamente');
      // Restaurar valores iniciales
      setUsername('');
      setSecurityQuestion('');
      setSecurityAnswer('');
      setNewPassword('');
      setShowPasswordField(false);
      setUserExists(false);
    } catch (error) {
      console.log(error);
      setMessage('Error al cambiar la contraseña');
    }
  };


  return (
    <div>
      <h2>Recuperación de Contraseña</h2>
      {!userExists && (
        <form onSubmit={handleCheckUser}>
        <div className="row mb-3">
          <div className="col-md-6 mx-auto">
            <label>Usuario</label>
            <input
              className="form-control form-control-sm border rounded"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 mx-auto">
            <button type="submit" className="mb-4 btn btn-primary mb-2 mr-2">
              Verificar Usuario
            </button>
            <button onClick={handleBackToLogin} className="btn btn-secondary">
                Volver al inicio
              </button>
          </div>
        </div>
      </form>)}
      {userExists && !showPasswordField && (
        <form onSubmit={handleRecoverPassword}>
          <div className="mb-3">

            <p className="mb-4 mt-4 h4 font-weight-bold text-success">{securityQuestion}</p>
          </div>
          <div className="mb-3 col-md-6 mx-auto">
            <label className="font-weight-bold">Respuesta de Seguridad</label>
            <input
              className="form-control form-control-sm border rounded"
              type="text"
              value={securityAnswer}
              onChange={(e) => setSecurityAnswer(e.target.value)}
              required
            />
            {message && <p>{message}</p>}
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <button type="submit" className="mb-4 btn btn-success mb-2 mr-2">
                Recuperar Contraseña
              </button>
              <button onClick={handleBackToLogin} className="btn btn-secondary">
              Volver al inicio
              </button>
            </div>
          </div>
        </form>
      )}
      {userExists && showPasswordField && (
        <form onSubmit={handleChangePassword}>
          <div className="mb-3 col-md-6 mx-auto">
            <label className="font-weight-bold">Nueva Contraseña:</label>
            <input
              className="form-control form-control-sm border rounded"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            {message && <p>{message}</p>}
          </div>
          <div className="row">
            <div className="col-md-6 mx-auto">
              <button type="submit"  onClick={handleBackToLogin} className="mb-4 btn btn-success mb-2 mr-2">
                Cambiar Contraseña
              </button>
              <button onClick={handleBackToLogin} className="btn btn-secondary">
              Volver al inicio
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

