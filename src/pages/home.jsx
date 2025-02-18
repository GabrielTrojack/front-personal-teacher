//Landing Page

import React from "react";
import HeroSection from "../sections/home/HeroSection";
import WavesBackground from "../sections/common/WavesBackground";
import WaveAnimation from "../sections/common/WaveAnimation";
import FeatureSection from "../sections/home/FeatureSection";

const Home = () => {
    const handleRedirect = () => {
        window.location.href = '/cadastro';
    };

    return (
        <div>
            <HeroSection onRedirect = {handleRedirect}/> 
            <WavesBackground />
            <WaveAnimation />
            <FeatureSection />
        </div>
    );
};

export default Home;
