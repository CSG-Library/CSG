import React, { useState, useEffect } from 'react';

import MagazineCategoryUi from '../ui/MagazineCategoryUi'

import useGetAisdeList from './useGetAisdeList'
import useGetBookList from './useGetBookList'

const MagazineCategory = () => {
  const { categoryCate } = useGetAisdeList()
  const { bookList } = useGetBookList()

  const [curPageNum, setCurPageNum] = useState(1)
  const [totalPageNum, setTotalPageNum] = useState(0)
  const [pageShowNum] = useState(15)


  useEffect(() => {
    setTotalPageNum(totalPageNum =>  Math.ceil(bookList.length / pageShowNum))
  }, [bookList])

  // 分页按钮
  const ClickPageNumHandler = (pageNum) => {
    return () => {
      setCurPageNum( curPageNum => pageNum)
    }
  }
  const ClickLeftPageBtnHandler = () => {
    curPageNum !== 1 
    &&
    setCurPageNum( curPageNum => curPageNum - 1) 
  }
  const ClickRightPageBtnHandler = () => {
    curPageNum !== totalPageNum 
    &&
    setCurPageNum( curPageNum => curPageNum + 1) 
  }

  return (
    <>
      <MagazineCategoryUi
        categoryCate={categoryCate}
        bookList={bookList}
        totalPageNum={totalPageNum} 
        curPageNum={curPageNum}
        onClickPageNum={ClickPageNumHandler}
        onClickLeftPageBtn={ClickLeftPageBtnHandler}
        onClickRightPageBtn={ClickRightPageBtnHandler}
        pageShowNum={pageShowNum}
      ></MagazineCategoryUi>
    </>
  )
}

export default MagazineCategory;
