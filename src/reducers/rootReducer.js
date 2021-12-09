import { combineReducers } from 'redux';
import { pokemonReducer } from './pokemonReducer';
import { uiReducer } from './uiReducer';

export const rootReducer = combineReducers ({
    ui: uiReducer,
    pokemon: pokemonReducer
});