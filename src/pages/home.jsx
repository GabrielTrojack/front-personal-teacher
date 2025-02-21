//Landing Page

import React from "react";
import HeroSection from "../sections/home/HeroSection";
import WavesBackground from "../sections/common/WavesBackground";
import WaveAnimation from "../sections/common/WaveAnimation";
import FeatureSection from "../sections/home/FeatureSection";

const Home = () => {

    return (
        <div>
            <HeroSection /> 
            <WavesBackground />
            <WaveAnimation />
            <FeatureSection />
        </div>
    );
};

export default Home;
