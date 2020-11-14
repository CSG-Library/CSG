import React, { useState } from 'react';

import { Ul, PageWrap } from './styleUl';
import { withRouter, useLocation } from 'react-router-dom';
import useGoAnother from './useGoAnother';
import useAddSome from './useAddSome';

const UlWrap = (props) => {
   const [icon] = useState([
      { id: 1, iconfont: '\ue600', txt: '推荐' }
   ])

   const { GoCommentClick, GoDetClick } = useGoAnother();
   const { AddShelf, AddRecommen, AddShoppingCart } = useAddSome();

   return (
      <Ul>
         {
            props.currentPageList.map((v, i) =>
               <li key={i + 'cyj'}>
                  <div onClick={GoDetClick()}><img src={v.book_img} width='124' height='180' alt="" /></div>
                  <div>
                     <h2 onClick={GoDetClick()}>
                        <span>{v.book_name}</span>
                        <button>阅读</button>
                     </h2>
                     <h3>{v.book_author}/{v['book_date']}/{v.book_publisher}/{v.book_binding}/译者名字</h3>
                     <PageWrap lc={3}>
                        <span>简介</span>：{v.book_info}
                     </PageWrap>

                     <h4>
                        <div onClick={GoCommentClick()}>
                           <i className='iconfont'>&#xe637;</i>
                           <span>写书评</span>
                        </div>
                        <div onClick={AddShelf(v)}>
                           <i className='iconfont'>&#xe60f;</i>
                           <span>加入书架</span>
                        </div>

                        {
                           icon.map(v =>
                              <div key={v.id} onClick={AddRecommen()}>
                                 <i className='iconfont'>{v.iconfont}</i>
                                 <span>{v.txt}</span>
                              </div>
                           )
                        }

                        <div onClick={AddShoppingCart(v)}>
                           <i className='iconfont'>&#xe610;</i>
                           <span>购买</span>
                        </div>
                     </h4>
                  </div>
               </li>
            )
         }
      </Ul>
   )
}

export default withRouter(UlWrap)