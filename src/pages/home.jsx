//Landing Page

import React from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import HeroSection from "../sections/home/HeroSection";
import WavesBackground from "../sections/common/WavesBackground";
import WaveAnimation from "../sections/common/WaveAnimation";
import FeatureSection from "../sections/home/FeatureSection";

const Home = () => {

    return (
        <div>
            <Navbar />
            <HeroSection /> 
            <WavesBackground />
            <WaveAnimation />
            <FeatureSection />
            <Footer color="#FFEAC3"/>
        </div>
    );
};

export default Home;
