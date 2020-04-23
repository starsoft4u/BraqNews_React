import {
    RECEIVED,
    ADD_CATEGORY,
    EDIT_CATEGORY,
    DELETE_CATEGORY,
} from '../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case RECEIVED: {
            return {
                ...state,
                ...action.payload.reduce((obj, category) => {
                    obj[category.id] = category;
                    return obj;
                }, {}),
            };
        }
        case ADD_CATEGORY:
        case EDIT_CATEGORY: {
            const category = action.payload;
            return { ...state, [category.id]: category };
        }
        case DELETE_CATEGORY: {
            const categoryId = action.payload;
            return { ...state, [categoryId]: undefined };
        }
        default: {
            return state;
        }
    }
};
