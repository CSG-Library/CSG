import { ADDLIST } from './actionTypes';

const addAction = list => {
   return {
      type: ADDLIST,
      list
   }
}

export {
   addAction
}