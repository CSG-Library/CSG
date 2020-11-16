// redux的方法combineReducers 合并所有的reducer
import { combineReducers } from 'redux-immutable';
// import {combineReducers} from 'redux'

// import { reducer as paperCate} from '../home/paperCate/index';
// import { reducer as paperCate} from '../home/paperCate/';
import { reducer as paperCate} from '@h/paperCate';
import { reducer as chapterdet} from '@h/chapterdetail';

import { reducer as introduce } from '@h/bookIntro';

import { reducer as category }from '@h/homepage';
import { reducer as shoppingCart } from '@h/shoppingCart';
import { reducer as onlineLibray } from '@h/onlineLibrary';
import { reducer as magazineCategory } from '@h/magazineCategory'

import { reducer as navOne } from '@c/navOne/reducer';
import { reducer as navTwo } from '@c/navTwo/reducer';

// import { reducer as myComp } from '@h/my';
import { reducer as rankSeaArticle } from '@h/Search';
import { reducer as my } from '@h/my'

export default combineReducers({
   paperCate,
   chapterdet,
   introduce,
   category,
   shoppingCart,
   navOne,
   navTwo,
   onlineLibray,
   rankSeaArticle,
   my,
   onlineLibray,
   magazineCategory
})
