import axios from 'axios';
import { useState } from 'react';

export const FormRecuperaPass = ({ onBackToLogin }) => {
  const [username, setUsername] = useState('');
  const [securityQuestion, setSecurityQuestion] = useState('');
  const [securityAnswer, setSecurityAnswer] = useState('');
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleBackToLogin = () => {
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
        alert("Usuario correcto");
        setSecurityQuestion(response.data[0].preguntaSeg);
        setShowPasswordField(true);
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
        const mockApiResponse = {
          success: true,
          password: response.data[0].password,
        };

        // Verifica si la respuesta del servidor es exitosa.
        if (mockApiResponse.success) {
          setPassword(mockApiResponse.password);
          setMessage('Tu contraseña  es: ' + mockApiResponse.password);
        } else {
          setMessage('Error. Verifica tu respuesta de seguridad.');
        }
      } else {
        setMessage('Respuesta de seguridad incorrecta. Verifica tu respuesta.');
        // Limpiar el input y permitir que el usuario ingrese otra respuesta
        setSecurityAnswer('');
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Recuperación de Contraseña</h2>
      <form onSubmit={handleCheckUser}>
        <div className="row mb-3">
          <div className="col-md-6 mx-auto">
            <label>Usuario:</label>
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
            <button type="submit" className="btn btn-primary">
              Verificar Usuario
            </button>
          </div>
        </div>
      </form>
      {showPasswordField && (
        <form onSubmit={handleRecoverPassword}>
          <div className="mb-3">
            <label className="text-success">Responde a la siguiente pregunta de seguridad:</label>
            <p className="mb-4 h4 font-weight-bold">{securityQuestion}</p>
          </div>
          <div className="mb-3 col-md-6 mx-auto">
            
            <label className="font-weight-bold">Respuesta de Seguridad:</label>
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
              <button type="submit" className="btn btn-success mb-2 mr-2">
                Recuperar Contraseña
              </button>
              <button onClick={handleBackToLogin} className="btn btn-secondary">
                Volver al Inicio de Sesión
              </button>
            </div>
          </div>
        </form>
      )}
      
    </div>
  );
};
