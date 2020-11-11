import { ONLIBRARY } from './actionType'
const defualtState={
    list:[],
}

const reducer =( state=defualtState,action) => {
    switch(action.type){
        case ONLIBRARY:
            return{
                list:action.list
            }
        default:
            return state
    }
}

export  default reducer