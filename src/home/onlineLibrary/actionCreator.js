import { get } from '@u/http.js'
import { ONLIBRARY } from './actionType'

const loadDataSync = list =>{
    return{
        type:ONLIBRARY,
        list
    }
}

const loadDatAsync= ()=>{
    return async dispatch =>{
        let result = await get({
            url:'/api/library'
        })
        console.log(result.data.library);
        dispatch(loadDataSync(result.data.library))
    }
}



export {
    loadDataSync,
    loadDatAsync
}