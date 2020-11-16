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
   const { book_id } = props.location.state;
   
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
         <SepPage {...props}></SepPage>
      </>
   )
}

export default ChapterDetUi