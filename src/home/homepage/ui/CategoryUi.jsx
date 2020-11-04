import React from 'react';


import BookCategory from './BookCategory'
import BookRecommend from './BookRecommend'

const CategoryUI = (props) => {
  const { asideCate, onChangeAsideCate, totalPageNum, curPageNum, onClickPageNum, onClickLeftPageBtn, onClickRightPageBtn  } = props
  return (
    <>
      <BookCategory
        asideCate={asideCate}
        onChangeAsideCate={onChangeAsideCate}
        totalPageNum={totalPageNum}
        curPageNum={curPageNum}
        onClickPageNum={onClickPageNum}
        onClickLeftPageBtn={onClickLeftPageBtn}
        onClickRightPageBtn={onClickRightPageBtn}
      ></BookCategory>
      <BookRecommend></BookRecommend>
    </>
  );
}

export default CategoryUI;
