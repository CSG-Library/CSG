import React from 'react';


import BookCategory from './BookCategory'
import BookRecommend from './BookRecommend'

const CategoryUI = (props) => {
  const { allList, asideList, asideCate, onChangeAsideCate, totalPageNum, curPageNum, onClickPageNum, onClickLeftPageBtn, onClickRightPageBtn, addShoppingCart  } = props
  return (
    <>
      <BookCategory
        allList={allList}
        asideList={asideList}
        asideCate={asideCate}
        onChangeAsideCate={onChangeAsideCate}
        totalPageNum={totalPageNum}
        curPageNum={curPageNum}
        onClickPageNum={onClickPageNum}
        onClickLeftPageBtn={onClickLeftPageBtn}
        onClickRightPageBtn={onClickRightPageBtn}
        addShoppingCart={addShoppingCart}
      ></BookCategory>
      <BookRecommend></BookRecommend>
    </>
  );
}

export default CategoryUI;
