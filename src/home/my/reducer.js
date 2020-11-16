import { SAVECOMP, LOADDATA, ADDBOOKSHELF } from './actionTypes';

const defaultState = {
   routeIndex: Number(localStorage.getItem("routeIndex")),
   list:[],
   shelfList:JSON.parse(localStorage.getItem("shelfList")) || []
}

const reducer = (state = defaultState, action) => {
   switch (action.type) {
      case SAVECOMP:
         return {
            ...state,
            routeIndex: action.routeIndex
         }
      case LOADDATA:
         return{
            ...state,
            list:action.list
         }

      case ADDBOOKSHELF: 
         // console.log(action.bookObj);
         
         state.shelfList.push(action.bookObj)
         let shelfArr = state.shelfList.filter(v => v.book_id !== action.bookObj.book_id)
         console.log(shelfArr)
         localStorage.setItem('shelfList', JSON.stringify(state.shelfList))
         return { 
            ...state,
            shelfList: shelfArr
         }
      default:
         return state
   }
}

export default reducer

