import React, {useState, useCallback ,useEffect} from 'react';
import {
    Container,
} from './StyledShortCommentLists'

import {get} from '@u/http'

// 公共组件

// import  SepPage from '@c/separatepage/SepPage'
import Paginations from '@c/pagination/Pagination'

// 短评页组件
import Lists from './Lists'
import Book from './Book'

const ShortCommentListsUi = (props) => {
    // console.log(props)
    let [ data ,setdata] = useState(0)
    const [current, setCurrent] = useState(1);
    const [pageSize, setPageSize] = useState(10)
    const [total , setTotal] = useState(0)
    // console.log(page)
    // let paper = 0
     
    //  console.log(current) 
    //  console.log( typeof current )
    //  let newCurrent =  (typeof current == 'object' ? current.current : 1 )
    // console.log(newCurrent)
    // console.log(pageSize)
    // console.log(paper)
    // console.log(total)
    const onclick = useEffect(()=>{
        (async()=>{
            let result = await get ({
                url:'/api/user/bookEssay'
            })  
            //  console.log(result.data.shortComments)
            // console.log(result.data.shortComments.length)
           
            setdata(()=>{
                // data:result.data.shortComments
                // return (data=result.data.shortComments.slice((current-1)*10,current*10))
                return (data=result.data.shortComments)
            })
            // console.log(data)
            setTotal(()=>result.data.shortComments.length)
            // console.log(data)
        })()
    //加个空数组是为了防止疯狂打印
    },[])
    // console.log(data)
    // console.log(total)
    //  console.log(result.data.shortComments.slice((current-1)*10,current*10))
    // let newData = data && data.data.slice((current-1)*10 , current*10)
    
    //  console.log(newData)

    const onChange = (page,pageSize) => {
        //setstate不能这样返回，因为它会成为一个对象覆盖前面的数值
         // setCurrent({ current: page })
         //在里面写一个回调，里面直接写你要修改成什么
         setCurrent(()=>{
            return page
         })
         // setPage({page:page})
         // console.log(page)
         // paper = page
         // console.log(paper)
         // console.log(pageSize) 
      }

    return (
        total===0 ?'' : (<Container>
        <main className = 'container'>
            <div className='box'>
                <Lists
                current={current}
                data={data}
                ></Lists>   
                <Book></Book>
            </div>
        </main>
        < Paginations
            onClick={onclick}
            defaultCurrent={current}
            onChangePage={onChange}
            pageSize={pageSize}
            total={total}
        ></ Paginations>
         {/* <Page></Page> */}
    </Container>)
        
    );
};

export default ShortCommentListsUi;