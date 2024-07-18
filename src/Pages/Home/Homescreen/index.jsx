import HeroSection from "../HeroSection";
import React from "react";
import MySkills from "../MySkills";
import AboutMe from "../AboutMe";
import MyPortfolio from "../MyPortfolio";
import Testimonial from "../Testimonials";
import ContactMe from "../ContactMe";
import Footer from "../Foorter";

//We call the functions of different sections within the brackets in here so they can render and then we send the index.jsx file to app.js to render the whole app
export default function Home(){
    return(
        <>  
            <HeroSection/>
            <MySkills/>
            <AboutMe/>
            {/*<MyPortfolio/>
            <Testimonial/>*/}
            <ContactMe/>
            <Footer/>
        </>
    );
}