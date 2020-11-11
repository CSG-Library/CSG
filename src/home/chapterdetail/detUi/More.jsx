import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { MoreWrap } from './styleChapterDet';

const More = (props) => {
   const history = useHistory()
   const handleClick = useCallback(({book_id}) => {
      return () => {
         history.push('/home/introduce', {book_id})
      }
   })

   return (
      <MoreWrap>
         {
            props.detlist && props.detlist.map(v =>
               (
                  <dl key={v.book_id}>
                     <dt><img src={v.book_img} onClick={handleClick(v)} alt="" /></dt>
                     <dd>{v.book_title}</dd>
                  </dl>
               )
            )
         }

         <div>发现更多好书 &gt; </div>
      </MoreWrap>
   )
}

export default More