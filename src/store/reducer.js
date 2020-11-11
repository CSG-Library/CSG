// redux的方法combineReducers 合并所有的reducer
import { combineReducers } from 'redux-immutable';
// import {combineReducers} from 'redux'

// import { reducer as paperCate} from '../home/paperCate/index';
// import { reducer as paperCate} from '../home/paperCate/';
import { reducer as paperCate} from '@h/paperCate';

import { reducer as introduce } from '@h/bookIntro';

import { reducer as category }from '@h/homepage';
import { reducer as shoppingCart } from '@h/shoppingCart';

export default combineReducers({
   paperCate,
   introduce,
   category,
   shoppingCart
})
