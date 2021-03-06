import React from 'react';
import HeroArea from '../HeroArea/HeroArea';
import NavBar from '../NavBar/NavBar';
import AboutMe from '../AboutMe/AboutMe';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import WhyWorkWithMe from '../WhyWorkWithMe/WhyWorkWithMe';
import ContactMe from '../ContactMe/ContactMe';
import './HomePage.css';

function HomePage() {
    return (
        <div id="HomePage">
            <NavBar />
            <HeroArea />
            <AboutMe />
            <Projects />
            <Skills />
            <WhyWorkWithMe />
            <ContactMe />
        </div>
    )
}

export default HomePage;
