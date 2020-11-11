import React from 'react';
import { Div2 } from '../detUi/styleChapterDet';
import Aside from '../detUi/Aside';
import Page from './Page';
import More from '../detUi/More';

// import PropsTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { actionCreator as ac } from '../';

import memoizeOne from 'memoize-one';
import { useLocation } from 'react-router-dom';

const ChapterReadUi = (props) => {
   const { book_id } = useLocation().state;

   const booklist = useSelector(state => state.getIn(["chapterdet", "bookdetail"]))
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(ac.GetBookDetList())
   }, [dispatch])

   const moreList = memoizeOne(booklist => booklist.slice(2, 5))
   return (
      <>
         <Div2>
            <Aside detlist={booklist} book_id={book_id}></Aside>
            <Page></Page>
            <More detlist={moreList(booklist)}></More>
         </Div2>
      </>
   )
}

export default ChapterReadUi