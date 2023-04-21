import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {useHistory } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import { getTypes, postPokemon } from "../../redux/action";
import style from "./Create.module.css"
import Footer from "../../components/footer/Footer"
import imgIncognito from "./assets/img incognito.jpg"


export default function Create() {
    const dispatch = useDispatch()
    const history = useHistory()
    const types = useSelector((state) => state.allTypes)
    const allPokes = useSelector((state) => state.allPokemons).map(n => n.name)
    const [errors, setErrors] = useState({})

    const [input, setInput] = useState({
        name: "",
        life: 50,
        attack: 50,
        defending: 50,
        speed: 50,
        height: 50,
        weight: 50,
        image: "",
        types: []
    })

    useEffect(() => {
        dispatch(getTypes())
    }, [dispatch])

    function handleChange(e) {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }

    function handleSelectTypes(e) {
        if (input.types.includes(e.target.value)) {
            alert("The pokemon already has that type");
        } else {
            if (input.types.length < 2) {
                setInput({
                    ...input,
                    types: [...input.types, e.target.value],
                });
            } else {
                alert("Choose only two types, please");
            }
        }
    }

    function handleDelete(t) {
        setInput({
            ...input,
            types: input.types.filter(ty => ty !== t)
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!errors.name && !errors.image && input.types.length > 0) {
            postPokemon(input);
            alert('Poke created!')
            history.push('/home')
        } else {
            if (input.types.length <= 0) {
                alert("Types are missing");
            } else {
                alert("Incomplete required fields!");
            }
        }
    }

    function validate(input) {
        let error = {}
        if (!input.name) {
            error.name = "Name is required"
        } else if (!/^[a-zA-Z]+$/.test(input.name)) {
            error.name = "Invalid name. The name must contain letters";
        } else if (input.name.length < 3 || input.name.length > 10) {
            error.name = "At least 3 letters, less than 10"
        } else if (allPokes.includes(input.name.toLowerCase())) {
            error.name = "The pokemon already exists, use another name";
        }

        if (!input.image) {
            error.image = "Your pokemon needs a image"
        } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(input.image)) {
            error.image = "Img must be a valid URL";
        }
        if (!input.attack) {
            error.attack = "el ataque tiene que tener un rango de 0 a 100"
        } else if (input.attack < 0) {
            error.attack = "no se permite numero negativos"
        }
        return error
    }
    function handleError(e) {
        e.preventDefault();
        alert("Complete the form");
    };

    return (
        <>
            <NavBar />
            <div className={style.create}>
                <div className={style.container}>
                    <div className={style.containerForm}>
                        <div className={style.subContainerForm}>
                            <h3>Create your Pokemon</h3>
                            <form onSubmit={(e) => handleSubmit(e)} className={style.form} >
                                <div className={style.formLocker}>
                                    <label>Name: </label>
                                    <input placeholder="Name..."
                                        type={"text"}
                                        name={"name"}
                                        value={input.name}
                                        onChange={(e) => handleChange(e)} />
                                    {errors.name && (<p className={style.stylesErrors}>{errors.name}</p>)}
                                </div>
                                <div className={style.formLocker}>
                                    <label>Image: </label>
                                    <input placeholder="Url..."
                                        type={"text"}
                                        name={"image"}
                                        value={input.image}
                                        onChange={(e) => handleChange(e)} />
                                    <p className={style.stylesErrors} >{errors.image}</p>
                                </div>

                                <div className={style.formCharacteristics}>
                                    <div className={style.characteristicsBoard}>
                                        <div className={style.div}>
                                            <label className={style.title}>Hp: </label>
                                            <input className={style.input} type="number" name={"life"} value={input.life} onChange={(e) => handleChange(e)} min="1" max="100" />
                                        </div>
                                        <div className={style.div}>
                                            <label className={style.title}>Attack: </label>
                                            <input type={"number"} name={"attack"} value={input.attack} onChange={(e) => handleChange(e)} min="1" max="100"/>
                                            {/*  <p>{errors.attack}</p> */}
                                        </div>

                                        <div className={style.div}>
                                            <label className={style.title}>Defending: </label>
                                            <input type={"number"} name={"defending"} value={input.defending} onChange={(e) => handleChange(e)} min="1" max="100"/>
                                        </div>
                                    </div>
                                    <div className={style.characteristicsBoard}>
                                        <div className={style.div}>
                                            <label className={style.title}>Speed: </label>
                                            <input type={"number"} name={"speed"} value={input.speed} onChange={(e) => handleChange(e)} min="1" max="100"/>
                                        </div>
                                        <div className={style.div}>
                                            <label className={style.title}>Height: </label>
                                            <input type={"number"} name={"height"} value={input.height} onChange={(e) => handleChange(e)} min="1" max="100"/>
                                        </div>
                                        <div className={style.div}>
                                            <label className={style.title}>Weight: </label>
                                            <input type={"number"} name={"weight"} value={input.weight} onChange={(e) => handleChange(e)} min="1" max="100"/>
                                        </div>
                                    </div>
                                </div>
                                <div className={style.formSelect}>
                                    <div className={style.containerSelect}>
                                        <select className={style.select} onChange={(e) => handleSelectTypes(e)}>
                                            <option disabled selected>Select Types</option>
                                            {types.map((t) => (
                                                <option key={t.id} name="types" value={t.name}>{t.name}</option>
                                            ))}
                                        </select>
                                    </div>

                                    {input.types.map(t =>
                                        <div className={style.selectDelete}>
                                            <p>{t}</p>
                                            <button type="button" onClick={() => handleDelete(t)}>X</button>
                                        </div>)}
                                </div>
                                <div className={style.formButton}>
                                    {input.name !== "" ?
                                        (<button className={style.btn2} type="submit">Create!</button>) :
                                        (<button className={style.btn2} onClick={handleError}>Create!</button>)}
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className={style.containerCard}>
                        <div className="card-container">
                            <div className="card-img">
                                {!input.image? <img src={imgIncognito} alt="not" /> : <img src={input.image} alt="Pokemon" />} 
                            </div>
                            <div className="card-info">
                                <h3>{input.name}</h3>
                                <div className={style.characteristics}>
                                    <div>
                                        <span className="pokemon-attack">Hp: {input.life}</span>
                                        <span className="pokemon-attack">Attack: {input.attack}</span>
                                        <span className="pokemon-attack">Defending: {input.defending}</span>
                                    </div>
                                    <div>
                                        <span className="pokemon-attack">Speed: {input.speed}</span>
                                        <span className="pokemon-attack">Height: {input.height}</span>
                                        <span className="pokemon-attack">Weight: {input.weight}</span>
                                    </div>
                                </div>
                                <div className="card-types">
                                    {input.types?.map(t =>
                                        <span className={t.name} key={t.id}>{t}</span>)}
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