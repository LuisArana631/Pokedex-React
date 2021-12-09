import { types } from "../types/types";

const initialState = {
    loadingState: false,
    actualPage: 1
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
        default:
            return state
    }
}