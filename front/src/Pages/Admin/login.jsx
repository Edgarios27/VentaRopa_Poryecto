import { useState } from 'react';

const Login = ({ onCloseModal }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);

    if (isRegistering) {
      console.log('Name:', name);
      console.log('Registrarse');
    } else {
      console.log('Iniciar sesión');
    }
  };

  const handleToggleRegister = () => {
    setIsRegistering((prevState) => !prevState);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    onCloseModal();
  };

  return (
    <div className="registro">
      <div className="registro-content">
        <div className='registration'>
          <h2 className='registration'>{isRegistering ? 'Registro' : 'Entrar'}</h2>
          <button className='registration-x' onClick={handleCloseModal}>❌</button>
        </div>
        <form onSubmit={handleSubmit} className="registros">
          {isRegistering && (
            <label>
              Name:
              <input type="text" value={name} onChange={handleNameChange} />
            </label>
          )}
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Password:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <button className="register" type="submit">
            {isRegistering ? 'Registrarme' : 'Entrar'}
          </button>
        </form>
        <div>
          <button onClick={handleToggleRegister}>
            {isRegistering ? 'Ya tienes cuenta? Inicia sesión!' : 'No tienes cuenta? Regístrate!'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
