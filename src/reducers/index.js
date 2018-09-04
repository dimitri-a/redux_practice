import { combineReducers } from 'redux'
import {cart} from './cart';
import {products} from './product';
import {users} from './user';

export default combineReducers({
  cart,
  products,
  users
})


const getData = state => state.data