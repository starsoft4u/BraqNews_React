import {
    SELECT_MENU,
    ACTIVE_MENU,
} from '../constants';

export const selectMenu = menu => ({
    type: SELECT_MENU,
    payload: menu,
});

export const activeMenu = menu => ({
    type: ACTIVE_MENU,
    payload: menu,
});
