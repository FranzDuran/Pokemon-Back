import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetail, delay } from "../../redux/action";
import Loading from "../../components/Loading/Loading";
import "./detail.css"
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/footer/Footer";


export default function Detail() {

    const dispatch = useDispatch()
    const { id } = useParams()
    const myPokemon = useSelector((state) => state.detail)

    useEffect(() => {
        dispatch(delay())
    }, [dispatch])

    useEffect(() => {
        dispatch(getDetail(id))
    }, [dispatch, id])

    return (
        <>
            <NavBar />
            {
                myPokemon.hasOwnProperty("name") ?
                    <main className="container main-pokemon">
                        <div className="header-main-pokemon">
                            <div className="container-info-pokemon">
                                <span className="number-pokemon">#{myPokemon.id}</span>
                                <h3 className="name-pokemon">{myPokemon.name}</h3>
                                {<div className="types-pokemon">
                                    {!myPokemon.createdInDb ?
                                        myPokemon.types && myPokemon.types.map(t =>
                                            <span className={t.name} >{t.name}</span>)
                                        :
                                        myPokemon.types.map(h =>
                                            <span className={h.name}>{h.name}</span>)}
                                </div>}
                                <div className="info--pokemon">
                                    <div className="group-info">
                                        <p>Altura</p>
                                        <span>{myPokemon.height}</span>
                                    </div>
                                    <div className="group-info">
                                        <p>Peso</p>
                                        <span>{myPokemon.weight}</span>
                                    </div>
                                </div>
                            </div>

                            <div className="container-img-pokemon">
                                <img
                                    src={myPokemon.image}
                                    alt="pokemon bulbasaur"
                                />
                            </div>
                        </div>

                        <div className="container-stats">
                            <h3>Estadísticas</h3>
                            <div className="stats">
                                <div className="stat-group">
                                    <span>Hp</span>
                                    <div className="progress-bar"></div>
                                    <span className="counter-stat">{myPokemon.life}</span>
                                </div>
                                <div className="stat-group">
                                    <span>Attack</span>
                                    <div className="progress-bar"></div>
                                    <span className="counter-stat">{myPokemon.attack}</span>
                                </div>
                                <div className="stat-group">
                                    <span>Defense</span>
                                    <div className="progress-bar"></div>
                                    <span className="counter-stat">{myPokemon.defending}</span>
                                </div>
                                <div className="stat-group">
                                    <span>Speed</span>
                                    <div className="progress-bar"></div>
                                    <span className="counter-stat">{myPokemon.speed}</span>
                                </div>
                            </div>
                        </div>
                    </main> : <Loading />
            }
            <Footer/>
        </>
    )
}
