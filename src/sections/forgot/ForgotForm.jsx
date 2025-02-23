import React from "react";
import "./ForgotForm.css";
import ForgotPass from "./../../assets/public/forgot-the-password.svg";

function ForgotForm () {
    return(
        <div className="container-reset">
            <div className="forgot-image-container">
                <img src={ForgotPass} alt="Esqueceu a senha" />
            </div>
            <div className="reset-section">
                <h2>Esqueceu sua senha?</h2>
                <h3>Não se preocupe, nós vamos te ajudar! Para isso, confirme suas credenciais:</h3>
                <form>
                    <div className="reset-group">
                        <label>Nome de usuário *</label>
                        <input type="text" placeholder="Insira seu nome de usuário" />
                    </div>
                    <div className="reset-group">
                        <label>Senha *</label>
                        <input type="password" placeholder="Insira sua nova senha" />
                    </div>
                    <div className="reset-group">
                        <input type="password" placeholder="Confirme sua nova senha" />
                    </div>
                    <button className="reset-button" type="submit">RESETAR SENHA</button>
                </form>
            </div>
        </div>
    );
}

export default ForgotForm;
