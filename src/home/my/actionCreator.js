import { SAVECOMP, LOADDATA, ADDBOOKSHELF } from './actionTypes'

import { get } from '@u/http.js'

// 保存侧栏路由组件 状态
const SaveCompAction = routeIndex => {
   return {
      type: SAVECOMP,
      routeIndex
   }
}

const loadDataSync=list=>{
   return{
     type:LOADDATA,
     list
   }
}

const loadDataAsync=(tab,index)=>{
   return async(dispatch)=>{
     let result=await get({
       url:'/api/mybook'
       // https://api.juooo.com/Show/Search/getShowList?city_id=0&category=35&keywords=&venue_id=&start_time=&page=1&referer_type=&time=1603637272824&version=6.1.9&referer=2&sign=791bcf01157a6ab1fa1c45ddd3ceb53c
     })
     // console.log(result);
     dispatch(loadDataSync(result.data.list))
   } 
}

const addBookShelf = bookObj => {
   return {
      type: ADDBOOKSHELF,
      bookObj
   }
}

export default{
   SaveCompAction,
   loadDataSync,
   loadDataAsync,
   addBookShelf
}