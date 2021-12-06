import React, { useState } from 'react';
import Pokedex from 'pokedex';
import ReactCardFlip from 'react-card-flip';
import { motion } from 'framer-motion';

import './Pokecard.css';

export const Pokecard = () => {
    const [flipped, setFlipped] = useState(false);
    let pokedex = new Pokedex();

    const handleClick = () => {
        setFlipped(!flipped);
    };

    return (
        <ReactCardFlip isFlipped={flipped} flipDirection="horizontal">
            <motion.div className="pokemon-card" onClick={handleClick} 
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }} 
                transition={{ type: "spring", stiffness: 100 }} >
                <div className="pokemon-img-container img-container abs-center">
                    <img
                    src={pokedex.pokemon(1).sprites.animated}
                    alt={pokedex.pokemon(1).name}
                    className="pokemon-img"
                    />
                </div>
                <div className="card-body">
                    <div className="card-top">
                        <h4>{pokedex.pokemon(1).name}</h4>
                        <div className="num-container">1</div>
                    </div>
                    <div className="card-bottom card-footer">
                        <div className="pokemon-type">                        
                            <div key="planta" className="pokemon-type-text">
                                <span class="badge rounded-pill bg-plant"><small>Planta</small></span>
                            </div>
                            <div key="bicho" className="pokemon-type-text">
                                <span class="badge rounded-pill bg-poison"><small>Veneno</small></span>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="pokemon-card" onClick={handleClick}>
                <div className="pokemon-img-container img-container abs-center">
                    <img
                    src={pokedex.pokemon(1).sprites.animated}
                    alt={pokedex.pokemon(1).name}
                    className="pokemon-img"
                    />
                </div>
                <div className="card-body">
                    <div className="row pl-3">
                        <div className="colsm">
                            <span>Base Experience: <b>64</b></span>    
                        </div>
                    </div>                    
                    <div className="row pl-3">
                        <div className="colsm">
                            <span>Weight: <b>69</b></span>    
                        </div>
                    </div>    
                    <div className="row pl-3">
                        <div className="colsm">
                            <span>Height: <b>7</b></span>    
                        </div>
                    </div>    
                </div>
            </div>
        </ReactCardFlip>
    );
}