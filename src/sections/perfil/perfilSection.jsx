import React, { useState, useEffect } from "react";
import "./perfilSection.css";
// import ExamTip from "../../components/examtip/examtip";
import BacktoTop from "../../components/backtotop/btop";
import { Link, useNavigate } from "react-router-dom";

function PerfilSection () {

    return(
            <div className="test-content">
        <div className="perfil">
            <div className="perfil-container">
                <h1>Olá {nome},</h1>
                <h2>Bem-vindo ao seu perfil! Aqui você encontrará um histórico completo de todas as suas avaliações passadas.
                    Acompanhe seu progresso, reveja seus acertos e identifique pontos de melhoria.
                    Tudo está organizado de forma fácil para você acessar sempre que precisar.</h2>

                {provas.length > 0 ? (
                    provas.map((prova) => (
                        <div key={prova.provaId} className="card-container">
                            <div onClick={()=>handleResult(prova.provaId)} className="card">
                                <div className="front-content">
                                    <p>{formatarDataOuHora(prova.inicioTempo)}</p>
                                    <p>{prova.materia}</p>
                                </div>
                                <div className="content">
                                    <p className="heading">Visualizar </p>
                                    <p>Quantidade de acertos: {prova.totalAcertos} alternativas</p>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className='texto-materia'>Não ha nada aqui ainda, faça uma prova primeiro...</p>
                )}



                <BacktoTop />
            </div>
            </div>
        </div>
    );
};

export default PerfilSection;