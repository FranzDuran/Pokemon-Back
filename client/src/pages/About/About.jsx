import Footer from "../../components/footer/Footer";
import NavBar from "../../components/NavBar/NavBar";
import "./about.css";

import imgPerfil from "./assets/perfil.jpg"
import image from "./assets/descarga.jpg"
import javaScript from "./assets/icons8-javascript-96.png"
import react from "./assets/icons8-reaccionar-80.png"
import redux from "./assets/icons8-redux-96.png"
import node from "./assets/icons8-nodejs-96.png"
import express from "./assets/icons8-express-js-80.png"
import sequelize from "./assets/sequelize.png"
import postgresql from "./assets/icons8-postgresql-96.png"
import css from "./assets/icons8-css3-96.png"
import html from "./assets/icons8-html-5-96.png"

function About() {
    return (
        <>
            <NavBar />
            <div className="about">
                <div className="abaut-container">
                    <div className="abaut-container-tittle">
                        <h3 className="">APP POKEMON</h3>
                    </div>
                    <div className="abaut-container-info">
                        <div className="info">
                            <div className="info-pokemon">
                                <div className="info-pokemon-containerImg">
                                    <img src={image} alt="About Main" />
                                </div>
                                <div className="info-pokemon-text">
                                    <p>"Algunos entrenadores no tienen miedo. Para ellos,
                                        este es solo un desafío más. Siguen sus corazones.
                                        Eso es lo que los distingue y los convertirá en Maestros Pokémon.
                                        Buena suerte a todos ustedes."
                                    </p>
                                </div>
                            </div>
                            <div className="abaut-container-developer">
                                <img src={imgPerfil} alt="Franz Duran" />
                                <p>App desarrollado por: <br /> Franz Duran - FullStack Developer</p>
                            </div>
                        </div>
                        <div className="info-proyect">
                            <div className="info-proyect-text">
                                <h4>Proyecto Individual PokemonApi</h4>
                                <p>
                                    Este proyecto consiste en una Single Page Application.
                                    En el cual podras realizar las siguientes acciones:
                                    <br />
                                    Busca pokémon por nombre.<br />
                                    Filtrar por tipos y por origen de la información.<br />
                                    Cada Card en la página de inicio muestra un Pokémon y al hacer clic en la misma puedes ver los detalles.<br />
                                    Ordenar alfabéticamente y por nivel de ataque.<br />
                                    Crear un nuevo Pokémon llenando el formulario.<br />
                                    Para completar el objetivo tuve que asegurarme de:
                                </p>
                                <ul className="info-proyect-ul">
                                    <li>Consumir los datos de una <a href="https://pokeapi.co/" target="blanc" alt="pokeapi">Api</a>.</li>
                                    <li>Guardar la informacion en la base de datos.
                                        Realizar las diferentes rutas que son utilizadas en el proyecto.</li>
                                    <li>Realizar en redux funcionalidades como una barra de busqueda,
                                        filtrados por tipo de pokemon, por ataque y alfabeticamente.</li>
                                    <li>
                                        Implementar funcionalidades que permitan la creacion de un
                                        nuevo pokemon y lo guarde en la base de datos.
                                    </li>
                                </ul>
                                <p>
                                    Para el desarrollo de la app utlicé las siguientes tecnologias:
                                </p>
                                <div className="info-proyect-logos">
                                    <span>
                                        <img src={javaScript} alt="javaScript" />
                                        <p>JavaScript</p>
                                    </span>
                                    <span>
                                        <img src={react} alt="react" />
                                        <p>React.js</p>
                                    </span>
                                    <span>
                                        <img src={redux} alt="redux" />
                                        <p>Redux</p>
                                    </span>
                                    <span>
                                        <img src={node} alt="node" />
                                        <p>Node.js</p>
                                    </span>
                                    <span>
                                        <img src={express} alt="express" />
                                        <p>Express.js</p>
                                    </span>
                                    <span>
                                        <img src={sequelize} alt="sequelize" />
                                        <p>Sequelize</p>
                                    </span>
                                    <span>
                                        <img src={postgresql} alt="postgresql" />
                                        <p>PostgreSQL</p>
                                    </span>
                                    <span>
                                        <img src={css} alt="css" />
                                        <p>Css</p>
                                    </span>
                                    <span>
                                        <img src={html} alt="html" />
                                        <p>Html</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;