import { LOADDATA, CHANGECATESIDE } from './actionTypes';

const defaultState = {
   cate: [],
   cateSide: Number(localStorage.getItem("cateSide"))
}

const reducer = (state = defaultState, action) => {
   switch (action.type) {
      case LOADDATA:
         return {
            ...state,
            cate: action.cate
         }
      case CHANGECATESIDE:
         return {
            ...state,
            cateSide: action.cateSide
         }
      default:
         return state
   }
}

export default reducer;