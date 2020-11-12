// redux的方法combineReducers 合并所有的reducer
import { combineReducers } from 'redux-immutable';

// import { reducer as paperCate} from '../home/paperCate/index';
// import { reducer as paperCate} from '../home/paperCate/';
import { reducer as paperCate} from '@h/paperCate';

import { reducer as introduce } from '@h/bookIntro';

import { reducer as category }from '@h/homepage';
import { reducer as shoppingCart } from '@h/shoppingCart';
import { reducer as onlineLibray } from '@h/onlineLibrary';
import { reducer as magazineCategory } from '@h/magazineCategory'



export default combineReducers({
   paperCate,
   introduce,
   category,
   shoppingCart,
   onlineLibray,
   magazineCategory
})
