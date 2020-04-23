import * as types from '../constants';

export default (state = {}, action) => {
    switch (action.type) {
        case types.RECEIVED: {
            return {
                ...state,
                ...action.payload.reduce((obj, source) => {
                    obj[source.id] = source;
                    return obj;
                }, {}),
            };
        }
        case types.ADD_SOURCE:
        case types.EDIT_SOURCE: {
            const source = action.payload;
            return { ...state, [source.id]: source };
        }
        case types.DELETE_SOURCE: {
            const sourceId = action.payload;
            return { ...state, [sourceId]: undefined };
        }
        default: {
            return state;
        }
    }
}
