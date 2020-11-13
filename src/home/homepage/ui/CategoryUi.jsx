import React from 'react';

import memoize from 'memoize-one'

import BookCategory from './BookCategory'
import BookRecommend from './BookRecommend'

const CategoryUI = (props) => {
  const { allList, asideList, asideCate, onChangeAsideCate, totalPageNum, curPageNum, onClickPageNum, onClickLeftPageBtn, onClickRightPageBtn, addShoppingCart , pageShowNum } = props
  const bookList = memoize(list => list.slice(((curPageNum - 1 ) * pageShowNum), curPageNum * pageShowNum))
  return (
    <>
      <BookCategory
        allList={bookList(allList)}
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
