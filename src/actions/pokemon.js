import { types } from '../types/types';

import { fetchManage } from "../helper/fetch";
import { uiEndLoadingGrid, uiLoadingGrid } from './ui';

export const pokemonStartLoading = (limit, offset) => {
    return async (dispatch) => {
        try {
            dispatch( uiLoadingGrid() );

            const resp = await fetchManage(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
            const body = await resp.json();
            const list = body.results;

            let arrayReturn = [];
            
            for ( let pokemon of list ){
                const pokResp = await fetchManage(pokemon.url);
                const pokBody = await pokResp.json();
                arrayReturn.push(pokBody);
            }

            dispatch( pokemonLoaded(arrayReturn));

            dispatch( uiEndLoadingGrid() );
        }catch(err){
            console.log(err);
        }
    }
}

const pokemonLoaded = (pokemons) => ({
    type: types.pokemonList,
    payload: pokemons
});