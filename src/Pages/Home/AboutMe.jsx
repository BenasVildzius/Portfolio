import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaNpm, FaGithub, FaRobot } from 'react-icons/fa';
import React from 'react';
import FadeInSection from "../../FadeInSection"

export default function AboutMe(){
    return(
        <section id="AboutMe" className="about--section">
            
            <div className="hero--section--content--box about--section--box">
                <div className="hero--section--content-boutme">
                    <h1 className="skills--section--heading">About Me</h1>
                    <h3>Who am I?</h3>
                    <p className="hero--section--description">
                        I am a third-year student at Kauno Kolegija (Kaunas University of Applied Sciences), pursuing a bachelor's degree in Programming Systems/Software Engineering. I am from Lithuania and currently reside in Kaunas.
                    </p>
                    <h3>Experience</h3>
                    <p className="hero--section--description-boutme">
                        Throughout my years of coding and learning, I've developed a strong passion for web development. I'm particularly fascinated by the intricacies of UI/UX design, as well as the challenge of implementing robust backend functionality to support my designs. My journey has been driven by a desire to create seamless, user-friendly web experiences that are both aesthetically pleasing and highly functional. <br />Additionally, I've learned to use <span className="chatgpt">ChatGPT</span> <FaRobot className="chatgpt"/> to my advantage, utilizing its capabilities to enhance my coding and problem-solving processes. I also use <span className="github">GitHub</span> <FaGithub className="github"/> for version control, ensuring my projects are well-organized and collaborative.
                    </p>
                    
                </div>
            </div>
            <div>
                    <FadeInSection delay={.5} direction='right'>
                    <div className="about--section--skills">
                        <h4>Over time, I've honed my skills in:</h4>
                        <ul>
                            <li>
                                <p><span className="html">HTML</span> <FaHtml5 className="html"/></p>
                            </li>
                            <li>
                                <p><span className="css">CSS</span> <FaCss3Alt className="css"/></p>
                            </li>
                            <li>
                                <p><span className="javascript">JavaScript</span> <FaJs className="javascript"/></p>
                            </li>
                        </ul>
                    </div>
                    </FadeInSection>
                    <FadeInSection delay={1} direction='right'>
                    <div className="about--section--skills">
                        <h4>And I regularly leverage powerful libraries and frameworks such as:</h4>
                        <ul>
                            <li>
                                <p><span className="react">React</span> <FaReact className="react"/></p>
                            </li>
                            <li>
                                <p><span className="nodejs">Node.js</span> <FaNodeJs className="nodejs"/></p>
                            </li>
                            <li>
                                <p><span className="npm">npm</span> <FaNpm className="npm"/></p>
                            </li>
                        </ul>
                    </div>
                    </FadeInSection>
            </div>
        </section>
    )
}