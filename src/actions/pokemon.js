import { types } from '../types/types';

import { fetchManage } from "../helper/fetch";

export const pokemonStartLoading = () => {
    return async (dispatch) => {
        try {
            const resp = await fetchManage('https://pokeapi.co/api/v2/pokemon?limit=24&offset=96');
            const body = await resp.json();
            const list = body.results;

            let arrayReturn = [];
            
            for ( let pokemon of list ){
                const pokResp = await fetchManage(pokemon.url);
                const pokBody = await pokResp.json();
                arrayReturn.push(pokBody);
            }

            dispatch( pokemonLoaded(arrayReturn));
            
            
        }catch(err){
            console.log(err);
        }
    }
}

const pokemonLoaded = (pokemons) => ({
    type: types.pokemonList,
    payload: pokemons
});