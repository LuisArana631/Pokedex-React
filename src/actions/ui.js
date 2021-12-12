import { types } from '../types/types';

export const uiLoadingGrid = () => ({
    type: types.loadingGrid
});

export const uiEndLoadingGrid = () => ({
    type: types.endLoadingGrid
});

export const uiChangePage = (new_page) => ({
    type: types.changePage,
    payload: new_page
});