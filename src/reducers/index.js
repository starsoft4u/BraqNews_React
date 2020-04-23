import { combineReducers } from 'redux';
import category from './Category';
import source from './Source';
import sideMenu from './SideMenu';
import { menu } from '../constants';

export default combineReducers({
    ...menu.filter(x => x.data).reduce((obj, { name }) => {
        obj[name] = combineReducers({ category, source });
        return obj;
    }, {}),
    ...{ sideMenu: sideMenu }
});
