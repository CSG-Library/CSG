import React, { useCallback, useState ,useEffect} from 'react';

import { Pagination } from 'antd';
import { PaginationWraper } from './StylePagination';

// import {get} from '@u/http'

const Paginations = (props) => {
   //  console.log(props)
   // let [ data ,setdata] = useState(0)
   // const [current, setCurrent] = useState(1);
   //  console.log(typeof props.current)
   
   //  let newCurrent =  (typeof props.current == 'object' ? props.current.current : 1 )
   // console.log(newCurrent)
   //  const onChange = useCallback((page,pageSize) => {
     
   //    setCurrent({ current: page })
   //    console.log(page)
   //    console.log(pageSize)
      
   // },[]) 
   // console.log(page)
   
//    const onChangeAjax = useEffect((current, size)=>{
//       (async()=>{
//           let result = await get ({
//               url:'/api/user/bookEssay'
//           })  
//           console.log(result.data.shortComments)
//           // console.log(result.data.shortComments.slice((current-1)*10,current*10))
//           setdata({
//               // data:result.data.shortComments
//               data:result.data.shortComments.slice((current-1)*10,current*10)
//           })
//           // console.log(data)
//       })()
//   //加个空数组是为了防止疯狂打印
//   },[])
   return (
      
      <PaginationWraper>
         <Pagination
            defaultCurrent={props.current}
            onChange={props.onChangePage}
            pageSize={props.pageSize}
            total={props.total}
            // onShowSizeChange={props.onChangeAjax}
         />
      </PaginationWraper>
   )
}

export default Paginations