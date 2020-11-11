// redux的方法combineReducers 合并所有的reducer
import { combineReducers } from 'redux-immutable';

// import { reducer as paperCate} from '../home/paperCate/index';
// import { reducer as paperCate} from '../home/paperCate/';
import { reducer as paperCate} from '@h/paperCate';
import { reducer as chapterdet} from '@h/chapterdetail';

import { reducer as introduce } from '@h/bookIntro';

import { reducer as category }from '@h/homepage';
import { reducer as shoppingCart } from '@h/shoppingCart';

import { reducer as navOne } from '@c/navOne/reducer';
import { reducer as navTwo } from '@c/navTwo/reducer';

import { reducer as myComp } from '@h/my/reducer';

export default combineReducers({
   paperCate,
   chapterdet,
   introduce,
   category,
   shoppingCart,
   navOne,
   navTwo,
   myComp
})
