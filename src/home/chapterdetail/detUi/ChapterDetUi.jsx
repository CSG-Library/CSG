import React from 'react';
import { Div2 } from './styleChapterDet';
import Aside from './Aside';
import Chapter from './Chapter';
import More from './More';

import SepPage from "@c/separatepage/SepPage";

import { actionCreator as ac } from '../';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

import memoizeOne from 'memoize-one';

const ChapterDetUi = (props) => {
   const { search } = props.location;
   // let query = new URLSearchParams(search);
   // console.log(query.get('book_id')); 
   let obj = search.split('?')[1].split("&").reduce( (initValue,v) => {
      var arr = v.split("=")
      initValue[arr[0]] = arr[1]
      return initValue
   }, {})
   // console.log(obj);

   // var book_id 
   // if(props.location.state) {
   //    const { book_id } = props.location.state
   // }else {
   //    const { book_id } = obj
   // }
   const { book_id } = props.location.state || obj;
   // console.log(book_id);
   
   const bookdetail = useSelector(state => state.getIn(['chapterdet', 'bookdetail']))
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(ac.GetBookDetList())
   }, [dispatch])

   const moreList = memoizeOne(bookdetail => bookdetail.slice(2, 5))
   return (
      <>
         <Div2>
            <Aside detlist={bookdetail} book_id={book_id}></Aside>
            <Chapter detlist={bookdetail} book_id={book_id}></Chapter>
            <More detlist={moreList(bookdetail)}></More>
         </Div2>
         {/* <SepPage {...props}></SepPage> */}
      </>
   )
}

export default ChapterDetUi