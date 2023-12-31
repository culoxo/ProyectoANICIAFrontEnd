import axios from 'axios'; // Asegúrate de importar axios
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
        setSecurityQuestion(response.data.preguntaSeg);
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
    if (securityAnswer === response.data.respuestaSeg) {
      const mockApiResponse = {
        success: true,
        password: response.data.password,
      };

      // Verifica si la respuesta del servidor es exitosa.
      if (mockApiResponse.success) {
        setPassword(mockApiResponse.password);
        setMessage('Contraseña recuperada exitosamente.');
      } else {
        setMessage('Error al recuperar la contraseña. Verifica tu respuesta de seguridad.');
      }
    } else {
      setMessage('Respuesta de seguridad incorrecta. Verifica tu respuesta.');
    }
  }catch (error) {
    console.log(error);
  };
  }
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
          <label>Pregunta de Seguridad: {securityQuestion}</label>
          <br />
          <label>
            Respuesta de Seguridad:
            <input
              type="text"
              value={securityAnswer}
              onChange={(e) => setSecurityAnswer(e.target.value)}
              required
            />
          </label>
          <br />
          <button type="submit" className="btn btn-success">
            Recuperar Contraseña
          </button>
        </form>
      )}
      {message && <p>{message}</p>}
      <div className="row">
        <div className="col-md-6 mx-auto">
          <button onClick={handleBackToLogin} className="btn btn-secondary mb-6">
            Volver al Inicio de Sesión
          </button>
        </div>
      </div>
      {password && <p>Tu contraseña recuperada es: {password}</p>}
    </div>
  );
  
};

