import React from 'react';

import { MagazineListWrap, PagerWrap } from './StyledMagazineCategory'
import Pager from '@c/pager/Pager'
import { useCallback } from 'react';
import { useHistory } from 'react-router-dom';

const MagazineList = () => {
   let history = useHistory()
   const handleClick = useCallback(() => {
      return () => {
         history.push('/home/magadet')
      }
   })


  return (
    <MagazineListWrap>
      <ul>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" onClick={handleClick()} alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" onClick={handleClick()} alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" onClick={handleClick()} alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" onClick={handleClick()} alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" onClick={handleClick()} alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" onClick={handleClick()} alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" onClick={handleClick()} alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
        <li>
          <img src="http://www.csg99.com/modules/article/images/nocover.jpg" alt=""/>
          <p className="title">PlayStation</p>
        </li>
      </ul>
 
      <PagerWrap>
        <Pager
          // totalPageNum={totalPageNum}
          // totalPageNum={5}
          // curPageNum={1}
          // curPageNum={curPageNum}
          // onClickPageNum={onClickPageNum}
          // onClickLeftPageBtn={onClickLeftPageBtn}
          // onClickRightPageBtn={onClickRightPageBtn}
        >
        </Pager>
      </PagerWrap>
    </MagazineListWrap> 
  );
}

export default MagazineList;
 