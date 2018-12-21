import { combineReducers } from 'redux';
import list from './action/list';
import details from './action/details';
import user from './action/user';

let reducer = combineReducers({
  list,
  details,
  user,
});

export default reducer;