import { ADDLIST } from './actionTypes';

const defaultState = {
   list: ''
}

const reducer = (state = defaultState, action) => {
   switch (action.type) {
      case ADDLIST:
         return {
            ...state,
            list: action.list
         }
      default:
         return state
   }
}

export {
   reducer
} 