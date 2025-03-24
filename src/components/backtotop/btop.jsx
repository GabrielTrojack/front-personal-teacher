import React, { useState, useEffect } from 'react';
import './btop.css';

const BacktoTop = () => {
    // Estado para controlar quando o botão deve aparecer
    const [isVisible, setIsVisible] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', 
        });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true); 
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <div className="btop">
            <button onClick={scrollToTop}>  
            <div class="text">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
            </div>
            <div class="clone">
            <span>Back</span>
            <span>to</span>
            <span>top</span>
            </div>
            <svg
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
            fill="none"
            class="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            width="20px">
            <path
            d="M14 5l7 7m0 0l-7 7m7-7H3"
            stroke-linejoin="round"
            stroke-linecap="round"
            ></path>
            </svg>
            </button>
        </div>
    );
}

export default BacktoTop;