import { types } from "../types/types";

const initialState = {
    pokemons: []
};

export const pokemonReducer = ( state = initialState, action  ) => {
    switch (action.type) {
        case types.pokemonList:
            return {
                ...state,
                pokemons: [ ...action.payload ]
            }
        default:
            return state
    }
}