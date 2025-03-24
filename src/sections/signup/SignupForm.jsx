import React, {useState} from "react";
import "./SignupForm.css";
import { Link } from 'react-router-dom';
import SignupIcon from "./../../assets/public/signup-icon.svg";
import api from "./../../services/api"
import { useNavigate } from "react-router-dom";


function SignupForm () {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const navigate = useNavigate()

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      username,
      password,
    };

    try {
      console.log(data)

      if (password===confirmpassword) {
        await api.post('/auth/register', data);
        alert("Cadastro realizado com sucesso!!");
        navigate('/login')
      }else{
        alert("As senhas devem ser iguais!!");
      }

    } catch (err) {
      console.log(err);
    }
  }
    return (
      <div className="signup-container">
        <div className="image-section">
            <img src={SignupIcon} alt="Estudante estudando"/>
        </div>
        <div className="form-section">
          <h2>A melhor forma de alcançar seus objetivos começa com um clique!</h2>

            <div className="form-group">
              <label>Nome de usuário *</label>

              <input 
              type="text" 
              placeholder="Cadastre um nome de usuário"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              />

            </div>
            <div className="form-group">
              <label>Senha *</label>
              <input 
              type="password" 
              placeholder="Insira sua senha" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group">

              <input 
              type="password"
              placeholder="Confirmar senha"
              value={confirmpassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              />

            </div>
            <div className="form-group checkbox-group">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Eu aceito os Termos de Serviço</label>
            </div>
            <button 
            type="submit"
            onClick={handleRegister}
            >CADASTRAR-SE</button>

          <Link to="/login">
          <p className="signup-p">Já possuo uma conta</p>
          </Link>
        </div>
      </div>
    );
  }  

export default SignupForm;