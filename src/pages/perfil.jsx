//Perfil

import React from "react";
import PerfilSection from "../sections/perfil/perfilSection";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Perfil = () => {
    
    return (
        <div>
            <Navbar />
            <PerfilSection />
            <Footer color="#2B59C3"/>
        </div>
    );
};

export default Perfil;