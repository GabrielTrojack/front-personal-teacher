import React from "react";
import "./SignupForm.css";
import SignupIcon from "./../assets/public/signup-icon.svg";

function SignupForm () {
    return (
      <div className="container">
        <div className="image-section">
            <img src={SignupIcon} alt="Estudante estudando"/>
        </div>
        <div className="form-section">
          <h2>A melhor forma de alcançar seus objetivos começa com um clique!</h2>
          <form>
            <div className="form-group">
              <label>Nome de usuário *</label>
              <input type="text" placeholder="Cadastre um nome de usuário" />
            </div>
            <div className="form-group">
              <label>Senha *</label>
              <input type="password" placeholder="Insira sua senha" />
            </div>
            <div className="form-group">
              <input type="password" placeholder="Confirmar senha" />
            </div>
            <div className="form-group checkbox-group">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Eu aceito os Termos de Serviço</label>
            </div>
            <button type="submit">CADASTRAR-SE</button>
          </form>
          <p>Já possuo uma conta</p>
        </div>
      </div>
    );
  }  

export default SignupForm;