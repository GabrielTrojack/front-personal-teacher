import React from "react";
import PrivacyPage from "../sections/privacy/PrivacyPoli";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Privacy = () => {
    return(
        <div>
            <Navbar />
            <PrivacyPage />
            <Footer color="#2B59C3"/>
        </div>
    );
}

export default Privacy;