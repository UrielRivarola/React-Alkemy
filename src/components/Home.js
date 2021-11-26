
import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import './home.css';



function Home() {

    const [superheroes, setSuperheroes] = useState([]);
    const [cardSuperheoes, setCardSuperheroes] = useState([]);
    const [busqueda, setBusqueda] = useState("");

    const peticionGet = async () => {
        await axios.get(`https://superheroapi.com/api/144915604537322/search/${busqueda}`)
            .then(response => {
                setSuperheroes(response.data.results);
                setCardSuperheroes(response.data.results);
                console.log(response.data.results);
            }).catch(error => {
                console.log(error);
            })
    }

    const handleChange = e => {
        setBusqueda(e.target.value);
        peticionGet();
        console.log(e.target.value)
    }


    useEffect(() => {
        peticionGet();
    }, [])



    return (
            <div className="background">
                <div  className="m-2">
                    <div className="container justify-content-center align-items-center mt-5 input">
                        <div className="">
                    <h3 className="text-center">Armá tu team!</h3>
                </div>
                <div className="containerInput">
                    <input className="form-control inputBuscar"
                        value={busqueda}
                        placeholder="Buscar superheroe"
                        onChange={handleChange}
                    />
                    <div className="text-center">
                    <button className="btn btn-primary mb-5" color="dark">
                        Buscar
                    </button></div>
                </div>
            </div>

            <div className="row row-cols-1 row-cols-md-5 g-4 contenedorCards">
                {superheroes &&
                    superheroes.map((sup, key) => (
                        <div className="card" key={sup.id}>
                            <div body
                                color="secondary"
                                outline
                                className="card-body border-3 border-dark"
                            ></div>
                                <img src={sup.image.url} className="card-img-top" />
                                <div className="card-body">
                                    <p className="card-text">{sup.name}</p>
                                    <div>
                                        <div className="contenedorProgreso">
                                            <div value={sup.powerstats.combat} color="black">
                                                Combate: {sup.powerstats.combat}%
                                            </div>
                                        </div>
                                        <div className="contenedorProgreso">
                                            <div value={sup.powerstats.durability} color="black">
                                                Durabilidad: {sup.powerstats.durability}%
                                            </div>
                                        </div>
                                        <div className="contenedorProgreso">
                                            <div value={sup.powerstats.intelligence} color="black">
                                                Inteligencia: {sup.powerstats.intelligence}%
                                            </div>
                                        </div>
                                        <div className="contenedorProgreso">
                                            <div value={sup.powerstats.power} color="black">
                                                Poder: {sup.powerstats.power}%
                                            </div>
                                        </div>
                                        <div className="contenedorProgreso">
                                            <div value={sup.powerstats.speed} color="black">
                                                Velocidad: {sup.powerstats.speed}%
                                            </div>
                                        </div>
                                        
                                        <div className="contenedorProgreso">
                                            <div value={sup.powerstats.strength} color="black">
                                                Destreza: {sup.powerstats.strength}%
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </div>
                    ))}
            </div>
        </div>
    </div>
    );

}
export default Home;