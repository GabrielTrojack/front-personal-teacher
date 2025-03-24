import React from "react";
import './examtip.css';
import { Link } from 'react-router-dom';

const ExamTip = () => {
    return(
        <div class="card-container">
            <Link to="/result">
            <div class="card">
                <div class="front-content">
                    <p>23, abr. 2025</p>
                </div>
                <div class="content">
                    <p class="heading">Visualizar </p>
                    <p>Quantidade de acertos: 18 alternativas</p>
                </div>
            </div>
        </Link>
        </div>
    );
}

export default ExamTip;