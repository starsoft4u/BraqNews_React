import {
    SELECT_MENU,
    ACTIVE_MENU,
} from '../constants';

const initialState = {
    selected: '',
    active: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_MENU: {
            return {
                ...state,
                ...{ selected: action.payload },
            };
        }
        case ACTIVE_MENU: {
            return {
                ...state,
                ...{ active: action.payload },
            }
        }
        default: {
            return state;
        }
    }
}
