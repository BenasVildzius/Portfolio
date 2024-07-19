//Defining the HTML of the hero section
//jsx is a combination of javascript syntax and html syntax
//HeroSextion function contains the code, we call the HeroSection function in the Index.js file of homescreen folder to render it
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
                <a className="btn btn-primary" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/benas-vild%C5%BEius-23438a258/">Get In Touch</a>
            </div>
            <div className="hero--section--img">
                <img src="./img/hero-img.png" alt="Hero Section" />
            </div>
        </section>
    )
}