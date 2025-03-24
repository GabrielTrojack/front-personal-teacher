import React from "react";
import ExamSelectPage from "./../sections/examelectpage/Exam";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const ExamSelect = () => {
    return(
        <div>
            <Navbar />
            <ExamSelectPage />
            <Footer color="#2B59C3"/>
        </div>
    );
}

export default ExamSelect;