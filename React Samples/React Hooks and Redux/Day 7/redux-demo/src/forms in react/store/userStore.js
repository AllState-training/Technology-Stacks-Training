import {createStore} from 'redux';
import userReducer from '../reducers/userReducer';

let userStore = createStore(userReducer);
export default userStore;
