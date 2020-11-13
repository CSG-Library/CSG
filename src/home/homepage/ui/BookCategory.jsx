import React, { useCallback } from 'react';
import {useHistory} from 'react-router-dom'

import { BookCategoryWrap, AsideTab, PagerWrap } from './StyledCategory'
import AsideBar from '@c/asideBar/AsideBar'
import Pager from '@c/pager/Pager'
import { withRouter } from 'react-router-dom';

const BookCategory = (props) => {
  // const myRef = React.createRef();
   const list = {
      title: '书籍分类',
      list: [
         {
         cateId: 0,
         cateName: '小说',
         num: 999 
         },
         {
         cateId: 1,
         cateName: '文艺',
         num: 666 
         },
         {
         cateId: 2,
         cateName: '青春',
         num: 233 
         }
      ]
   }

  const history = useHistory()
  //  console.log( history)
   console.log(props)
  // const handleClick = useCallback(() => {
  //  return () => {
  //     props.history.push('/home/introduce')
  //  }
  // })
  // var data = document.getElementsByTagName('li');
  
  const handleClick = useCallback((book_id)=>{
    return ()=>{
      history.push('/home/introduce' , {book_id})
    }
  }, [history]) 

  const { allList, asideList,addShoppingCart, asideCate, onChangeAsideCate, totalPageNum, curPageNum, onClickPageNum, onClickLeftPageBtn, onClickRightPageBtn } = props
  
  const list = {
    title: '书籍分类',
    list: asideList

  }
  
  return (
    <BookCategoryWrap>
      <div className='container'>
        <AsideTab>
          <AsideBar
            list={list}
            asideCate={asideCate}
            onChangeAsideCate={onChangeAsideCate}
          ></AsideBar>
        </AsideTab> 

        <section>
          <h2>
            <span>热门</span>/
            <span>新书</span>/
            <span>销量</span>
          </h2>

          <ul>
            {
              allList.map(item => {
                return(
                  <li key={item.book_id}>
                    <img 
                    className='book-img' 
                    src={item.book_img} 
                    alt=""
                    onClick={handleClick()}
                    />
                    <div className='book-content'>
                      <h3>{item.book_name}<span onClick={handleClick()}>阅读</span></h3>
                      <h4>作者/{item.book_date}/出版社/装帧/译者名字</h4>
                      <p><span>简介：</span>{item.book_info}</p>

                      <div>
                        <span className='comment'>
                          <img src="/img/comment.png" alt=""/>
                          写书评
                        </span>
                        <span className='to-bookshelf-btn'>
                          <img src="/img/add-bookshelf.png" alt=""/>
                          加入书架
                        </span>
                        <span className='recommend-btn'>
                          <img src="/img/recommend.png" alt=""/>
                          推荐
                        </span>
                        <span 
                          className='add-shoppingcart-btn'
                          onClick={ addShoppingCart(item)}
                        >
                          <img src="/img/shopping-cart.png" alt=""/>
                          加入购物车
                        </span>
                      </div>
                    </div>
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
        </section>
      </div>
    </BookCategoryWrap>
  );
}

export default withRouter(BookCategory);
