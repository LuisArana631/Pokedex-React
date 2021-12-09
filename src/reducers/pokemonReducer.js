import { types } from "../types/types";

const initialState = {
    pokemons: [{
        name: 'Bulbasaur',
        id: 1,
        types: ['Plant', 'Poison'],
        base: 64,
        weight: 64,
        height: 7
    },
    {
        name: 'Ivysaur',
        id: 2,
        types: ['Plant', 'Poison'],
        base: 142,
        weight: 130,
        height: 10
    },]
};

export const pokemonReducer = ( state = initialState, action  ) => {
    switch (action.type) {
        case types.pokemonList:
            return {
                ...state
            }
        default:
            return state
    }
}