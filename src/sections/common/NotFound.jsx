import React from "react";
import "./NotFound.css";
import { Link } from 'react-router-dom';
import LostIcon from "./../../assets/public/lost-notfound.svg";

const NotFoundForm = () => {
    return(
        <div className="notfound-container">
            <div className="notfound-image">
                <img src={LostIcon} alt="Usuário perdido" />
            </div>
            <div>
            <div className="notfound-section">
                <h2>Página não encontrada :(</h2>
                <h3>Nós não conseguimos encontrar o que você está procurando. Você pode voltar para a página anterior, visitar nossa página inicial ou nos contatar.</h3>
            </div>
            <div className="lost-button-container">
                <Link to="/">
                <button className="lost-button">Página Inicial</button>
                </Link>
                <Link to="/">
                <button className="lost-button">Contate-nos</button>
                </Link>
            </div>
            </div>
        </div>
    );
}

export default NotFoundForm;
