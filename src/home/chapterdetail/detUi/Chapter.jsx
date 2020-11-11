import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';

import { ChapterWrap, Title } from './styleChapterDet';

const Chapter = (props) => {
   const handleClick = useCallback((id) => {
      return () => {
         props.history.push('/home/chapterpage', {book_id:id})
      }
   })

   let { detlist, book_id } = props;
   let list = detlist[book_id] && detlist[book_id]['detail'];
   // console.log(list)
   return (
      <ChapterWrap>
         <Title width='0 0 1px 0'><span>章节详情</span></Title>
         <ul>
            {
               list && list.map(v =>
                  <li
                     key={v['chapter-id']}
                     onClick={handleClick(v['chapter-id'])}
                  >{v['chapter-name']}</li>
               )
            }
         </ul>
      </ChapterWrap>
   )
}

export default withRouter(Chapter)