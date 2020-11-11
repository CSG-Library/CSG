import { CHANGEINDEX } from './actionTypes';

const SaveCheckAction = (curIndex) => {
   return {
      type: CHANGEINDEX,
      curIndex
   }
}

export {
   SaveCheckAction
}