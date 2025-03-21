import React, {useState} from "react";
import "./LoginForm.css";
import { Link } from 'react-router-dom';
import LoginIcon from "./../../assets/public/login-icon.svg";
import api from "./../../services/api"
import { useNavigate } from "react-router-dom";

function LoginForm () {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

    async function handleLogin() {
      const data = {
        username,
        password
      }
      try {
          const response = await api.post('auth/LOGIN',data)
          const token = response.data.token
          localStorage.setItem('token', token)
          console.log(token)
          navigate('/home')
        } catch (err) {
          alert(err.response.data.message)
        }
    }

    return(
        <div className="login-container">
        <div className="login-image-section">
            <img src={LoginIcon} alt="Estudante estudando"/>
        </div>
        <div className="login-section">
          <h2>Bem-vindo de volta!</h2>
            <div className="login-group">
              <label>Nome de usuário *</label>
              <input 
              autoCapitalize="none"
              value={username}
              className="input"
              onChange={e => setUsername(e.target.value)}
              type="text" 
              placeholder="Insira seu nome de usuário" 
              />
            </div>

            <div className="login-group">
              <label>Senha *</label>
              <input 
              type="password" 
              placeholder="Insira sua senha" 
              value={password}
              className="input"
              onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group checkbox-group">

              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Lembrar de mim</label>
            </div>
            <button onClick={handleLogin}>LOGIN</button>


          <Link to="/reset">
          <p>Esqueceu a senha?</p>
          </Link>
          <Link to="/cadastro">
         <p>Cadastrar-se</p>
        </Link>
        </div>
      </div>
    );
}

export default LoginForm;