import React from 'react';


import { MagazineListWrap, PagerWrap } from './StyledMagazineCategory'
import Pager from '@c/pager/Pager'
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const MagazineList = (props) => {
   let history = useHistory()
   const handleClick = useCallback(() => {
      return () => {
         history.push('/home/magadet')
      }
   })

   const { bookList, totalPageNum, curPageNum, onClickPageNum, onClickLeftPageBtn, onClickRightPageBtn } = props
  //  console.log(bookList)
  return (
    <MagazineListWrap>
      <ul>
        {
          bookList && bookList.map(item => {
            return (
              <li key={item.magazined_id}>
                <img src={item.magazined_img} onClick={handleClick()} alt=""/>
                <p className="title">{item.magazined_name}</p>
              </li>
            )
          })
        }
      </ul>
 
      <PagerWrap>
        <Pager
          totalPageNum={totalPageNum}
          curPageNum={curPageNum}
          onClickPageNum={onClickPageNum}
          onClickLeftPageBtn={onClickLeftPageBtn}
          onClickRightPageBtn={onClickRightPageBtn}
        >
        </Pager>
      </PagerWrap>
    </MagazineListWrap> 
  );
}

export default MagazineList;
 