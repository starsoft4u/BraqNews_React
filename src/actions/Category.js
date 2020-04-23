import {
    ADD_CATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY
} from '../constants';

export const addCategory = category => ({
    type: ADD_CATEGORY,
    payload: category,
});

export const editCategory = category => ({
    type: EDIT_CATEGORY,
    payload: category,
});

export const deleteCategory = categoryId => ({
    type: DELETE_CATEGORY,
    payload: categoryId,
});
