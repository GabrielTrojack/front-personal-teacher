import React from "react";
import ExamPage from "./../sections/examepage/Exam";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const Exam = () => {
    return(
        <div>
            <Navbar />
            <ExamPage />
            <Footer color="#2B59C3"/>
        </div>
    );
}

export default Exam;