import { types } from "../types/types";

const initialState = {
    loadingState: false,
    actualPage: 0,
    totalPages: 45
};

export const uiReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case types.loadingGrid:
            return {
                ...state,
                loadingState: true
            }
        case types.endLoadingGrid:
            return {
                ...state,
                loadingState: false
            }
        case types.changePage:
            return {
                ...state,
                actualPage: action.payload
            }
        default:
            return state
    }
}