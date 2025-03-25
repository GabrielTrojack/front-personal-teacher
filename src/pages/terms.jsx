import React from "react";
import TermsPage from "../sections/terms/TermsUse";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Terms = () => {
    return(
        <div>
            <Navbar />
            <TermsPage />
            <Footer color="#2B59C3"/>
        </div>
    );
}

export default Terms;