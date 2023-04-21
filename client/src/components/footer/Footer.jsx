import { Link } from "react-router-dom"
import "./footer.css"
import logo from "./assets/poke.png"
import linkedin from "./assets/linkedin.png"
import github from "./assets/github.png"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <Link to='/home' className="footer-seccion">
                    <img src={logo} alt="logo-pokemon" className='img-logo' />
                </Link>
                <ul className="footer-seccion">
                    <li className='text-tittle'>Pokemon</li>
                    <li className="" >
                        En este sitio web podras encontrar informacions sobre tus pokemon favoritos.
                    </li>
                </ul>
                <ul className="footer-seccion">
                    <li className='text-tittle'>Enlaces</li>
                    <li>
                        <a href="https://pokeapi.co/" class='text-reset' style={{ textDecoration: 'none', color: 'inherit' }}>PokemonApi</a>
                    </li>
                </ul>
                <ul className="footer-seccion">
                    <li className="text-tittle">Sígueme</li>
                    <a
                        href="https://www.linkedin.com/in/franz-duran/"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        className="footer-seccion--redes">
                        <img src={linkedin} alt="linkedin" />
                        <li>Linkedin </li></a>

                    <a href="https://github.com/FranzDuran"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        className="footer-seccion--redes">
                        <img src={github} alt="github" />
                        <li>GitHub </li></a>
                </ul>
            </div>
        </footer>
    )
}

export default Footer;