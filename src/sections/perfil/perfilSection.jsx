import React, { useState, useEffect } from "react";
import "./perfilSection.css";
// import ExamTip from "../../components/examtip/examtip";
import BacktoTop from "../../components/backtotop/btop";
import { Link, useNavigate } from "react-router-dom";

function PerfilSection() {
    const navigate = useNavigate()
    const token = localStorage.getItem('token');
    const [provas, setProvas] = useState([]);
    const [nome, setNome] = useState('');


    useEffect(() => {
        const fetchProvas = async () => {
            try {
                const response = await fetch(`http://localhost:3333/exam/getUserProvas`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': token,
                    },
                });
                if (!response.ok) {
                    const errorText = await response.text();
                    console.error('Erro ao buscar provas:', errorText);
                    return;
                }
                const data = await response.json();
                setProvas(data);
            } catch (error) {
                console.error('Erro ao buscar provas:', error);
            }
        };
        if (token) {
            fetchProvas();
        }
    }, [token]);

    useEffect(() => {
        const fetchNome = async () => {
          if (!token) {
            console.error('Token não encontrado!');
            return;
          }
    
          try {
            const response = await fetch('http://localhost:3333/exam/getUserName', {
              method: 'GET',
              headers: {
                'Authorization': token,  // Passa o token no cabeçalho
              },
            });
    
            if (!response.ok) {
              const errorText = await response.text();
              console.error('Erro ao buscar o nome do usuário:', errorText);
              return;
            }
    
            const data = await response.json();
            setNome(data.username);  // Supondo que a resposta tem o campo `username`
          } catch (error) {
            console.error('Erro ao buscar nome:', error);
          }
        };
    
        fetchNome();
      }, [token]);

    const handleResult = (examId) => {
        navigate('/result', { state:{
            examId: examId
          }});
    };


    const formatarDataOuHora = (dataISO) => {
        const agora = new Date();
        const data = new Date(dataISO);
        const diffHoras = (agora - data) / (1000 * 60 * 60);

        if (diffHoras < 24) {
            return `Prova feita às ${data.toLocaleTimeString('pt-BR', {
                hour: '2-digit',
                minute: '2-digit'
            })}`;
        } else {
            return `Prova feita em ${data.toLocaleDateString('pt-BR')}`;
        }
    };


    return (
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