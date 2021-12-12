import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Pagination } from '../ui/Pagination';
import { Pokecard } from './Pokecard';
import './Pokedex.css';

import loadingGif from './loading.gif';
import { pokemonStartLoading } from '../../actions/pokemon';

export const Pokedex = () => {
    const { loadingState, actualPage } = useSelector( state => state.ui );
    const { pokemons } = useSelector(state => state.pokemon );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( pokemonStartLoading(24, 24 * actualPage ) );        
    }, [dispatch, actualPage]);

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

