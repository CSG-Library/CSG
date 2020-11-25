import React, { useCallback } from 'react';
import { withRouter } from 'react-router-dom';

import { ChapterWrap, Title } from './styleChapterDet';


import { useHistory } from 'react-router-dom';

const Chapter = (props) => {
   const history = useHistory()
   const handleClick = useCallback((id) => {
      return () => {
         console.log(props);
         // props.history.push('/home/chapterpage', {book_id:id})
         window.location.history.push('/home/chapterpage')
      }
   }, [history])

   let { detlist, book_id } = props;
   // console.log(detlist);
   let list = detlist[book_id] && detlist[book_id]['detail'];
   // console.log(list)
   return (
      <ChapterWrap>
         <Title width='0 0 1px 0'><span>章节详情</span></Title>
         <ul>
            {
               list && list.map((v, i) =>
                  <li
                     key={i}
                     onClick={handleClick(v['chapter-id'])}
                  >{v['chapter-name']}</li>
               )
            }
         </ul>
      </ChapterWrap>
   )
}

export default withRouter(Chapter)