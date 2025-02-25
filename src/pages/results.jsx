//Resultado final
import React from "react";
import ResultPage from "../sections/results/ResultPage";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Result = () => {
    return(
        <div>
            <Navbar />
            <ResultPage/>
            <Footer/>
        </div>
    );
}

export default Result;