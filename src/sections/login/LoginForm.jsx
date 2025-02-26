import React from "react";
import "./LoginForm.css";
import { Link } from 'react-router-dom';
import LoginIcon from "./../../assets/public/login-icon.svg";

function LoginForm () {
    return(
        <div className="login-container">
        <div className="login-image-section">
            <img src={LoginIcon} alt="Estudante estudando"/>
        </div>
        <div className="login-section">
          <h2>Bem-vindo de volta!</h2>
          <form>
            <div className="login-group">
              <label>Nome de usuário *</label>
              <input type="text" placeholder="Insira seu nome de usuário" />
            </div>
            <div className="login-group">
              <label>Senha *</label>
              <input type="password" placeholder="Insira sua senha" />
            </div>
            <div className="form-group checkbox-group">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Lembrar de mim</label>
            </div>
            <Link to="/exam">
            <button type="submit">LOGIN</button>
            </Link>
          </form>
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