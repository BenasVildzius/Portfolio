//Defining the HTML of the hero section
//jsx is a combination of javascript syntax and html syntax
//HeroSextion function contains the code, we call the HeroSection function in the Index.js file of homescreen folder to render it
import { Link } from "react-scroll";

export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section--content">
                    <p className="section--title">Hey, I'am Benas</p>
                    <h1 className="hero--section--title">
                        <span className="hero--section--title--color">
                            FullStack
                        </span>{" "}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        I am a motivated FullStack developer with a passion for creating web applications. I enjoy working on both the design and the BackEnd aspects of development.
                    </p>
                </div>
                <Link to="Contact" className="btn btn-primary" 
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                    Get In Touch
                </Link>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero-img.png" alt="Hero Section" />
            </div>            
        </section>
    )
}