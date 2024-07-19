import {useState, useEffect} from "react"
import {Link} from "react-scroll"

function Navbar(){
    //Constant state of the navbar, inactive
    const [navActive, setNavActive] = useState(false);

    //Sets the navbar active if it isnt active allready
    const toggleNav = () =>{
        setNavActive(!navActive)
    }

    //Sets the navbar to inactive if we close menu
    const closeMenu = () =>{
        setNavActive(false)
    }

    //if the window width is less or equal to 1200 then the menu closes
    useEffect(() => {
        if(window.innerWidth <= 12000){
            closeMenu();
        }
    }, [])

    return <nav className={`navbar ${navActive ? "active" : ""}`}>
    
        <div>
            <img className="navbar--logo" src="./img/react-2.svg" alt="logoipsum" />
        </div>
        <a className={`nav__hamburger ${navActive ? "active" : ""}`} onClick={toggleNav}>
            <span className="nav__hamburger__line">

            </span>
            <span className="nav__hamburger__line">
            
            </span>
            <span className="nav__hamburger__line">

            </span>
            <span className="nav__hamburger__line">
            
            </span>
        </a>
        <div className={`navbar--items ${navActive ? "active" : ""}`}>
            <ul>
                <li>
                    <Link onClick={closeMenu} 
                        activeClass="navbar--active-content" 
                        spy={true} smooth={true} 
                        offset={-70} 
                        duration={500}
                        to="heroSection" 
                        className="navbar--content"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link onClick={closeMenu} 
                        activeClass="navbar--active-content" 
                        spy={true} smooth={true} 
                        offset={-70} 
                        duration={500}
                        to="AboutMe" 
                        className="navbar--content"
                        >
                        About Me
                    </Link>
                </li>
                <li>
                    <Link onClick={closeMenu} 
                        activeClass="navbar--active-content" 
                        spy={true} smooth={true} 
                        offset={-70} 
                        duration={500}
                        to="MyPortfolio" 
                        className="navbar--content"
                    >
                        Portfolio
                    </Link>
                </li>
                <li>
                    <Link onClick={closeMenu} 
                        activeClass="navbar--active-content" 
                        spy={true} smooth={true} 
                        offset={-70} 
                        duration={500}
                        to="Testimonials" 
                        className="navbar--content"
                    >
                        Testimonials
                    </Link>
                </li>
            </ul>
        </div>

        <Link onClick={closeMenu} 
            activeClass="navbar--active-content" 
            spy={true} smooth={true} 
            offset={-70} 
            duration={500}
            to="Contact" 
            className="btn btn-outline-primary"
        >
            Contact Me
        </Link>

    </nav>
}

export default Navbar;