import React from 'react';
import { useSelector } from 'react-redux';
import { Pagination } from '../ui/Pagination';
import { Pokecard } from './Pokecard';
import './Pokedex.css';

import loadingGif from './loading.gif';

export const Pokedex = () => {
    const { loadingState } = useSelector( state => state.ui );
    const { pokemons } = useSelector(state => state.pokemon );

    return (
        <div className="mt-3 ml-2 mr-2">
            { loadingState ? (
                <div className="center-img cat text-center">
                    <img className="loading-img" src={loadingGif} alt="loading..."></img>
                    <a className="title-loading" href="/">Loading Pokedex...</a>
                </div>
            ) : (
                <div>
                    <div className="pokedex-grid">
                        {
                            pokemons.map((pokemon, idx) => {
                                return <Pokecard key={ idx } { ...pokemon }/>;
                            })
                        }
                    </div>
                    <div>
                        <Pagination/> 
                    </div>
                </div>
            ) }
            
        </div>
    )
}

