import { LOADLIST, SAVESTATU } from './actionTypes';

const defaultState = {
   bookdetail: [],
   statu: JSON.parse(localStorage.getItem("statu"))
}

const reducer = (state = defaultState, action) => {
   switch(action.type) {
      case LOADLIST:
         return {
            ...state,
            bookdetail: action.bookdetail
         }
      case SAVESTATU:
         return {
            ...state,
            status: action.statu
         }
      default:
         return state
   }
}

export default reducer