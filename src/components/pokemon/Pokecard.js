import React, { useState } from 'react';
import Pokedex from 'pokedex';
import ReactCardFlip from 'react-card-flip';
import { motion } from 'framer-motion';

import './Pokecard.css';

export const Pokecard = ({ name, id, types, base, weight, height }) => {
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
                    src={pokedex.pokemon(id).sprites.animated}
                    alt={name}
                    className="pokemon-img"
                    />
                </div>
                <div className="card-body">
                    <div className="card-top">
                        <h4>{ name }</h4>
                        <div className="num-container"> {id} </div>
                    </div>
                    <div className="card-bottom card-footer">
                        <div className="pokemon-type">   
                            {
                                types.map((type, idx) => {
                                    return (
                                        <div key={idx} className="pokemon-type-text">
                                            <span className={`badge rounded-pill bg-${type.toLowerCase()}`}><small>{type}</small></span>
                                        </div>
                                    );
                                })
                            }                 
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="pokemon-card" onClick={handleClick}>
                <div className="pokemon-img-container img-container abs-center">
                    <img
                    src={pokedex.pokemon(id).sprites.animated}
                    alt={name}
                    className="pokemon-img"
                    />
                </div>
                <div className="card-body">
                    <div className="row pl-3">
                        <div className="colsm">
                            <span>Base Experience: <b> {base} </b></span>    
                        </div>
                    </div>                    
                    <div className="row pl-3">
                        <div className="colsm">
                            <span>Weight: <b> {weight} </b></span>    
                        </div>
                    </div>    
                    <div className="row pl-3">
                        <div className="colsm">
                            <span>Height: <b> {height} </b></span>    
                        </div>
                    </div>    
                </div>
            </div>
        </ReactCardFlip>
    );
}