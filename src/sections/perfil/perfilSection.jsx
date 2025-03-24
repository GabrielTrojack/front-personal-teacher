import React from "react";
import "./perfilSection.css";
import ExamTip from "../../components/examtip/examtip";
import BacktoTop from "../../components/backtotop/btop";

function PerfilSection () {
    return(
        <div className="perfil">
            <div className="perfil-container">
                <h1>Olá @xxxxxxx,</h1>
                <h2>Bem-vindo ao seu perfil! Aqui você encontrará um histórico completo de todas as suas avaliações passadas. 
                    Acompanhe seu progresso, reveja seus acertos e identifique pontos de melhoria. 
                    Tudo está organizado de forma fácil para você acessar sempre que precisar.</h2>
                <ExamTip/>
                <ExamTip/>
                <BacktoTop/>
            </div>
        </div>
    );
};

export default PerfilSection;