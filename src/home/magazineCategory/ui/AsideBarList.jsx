import React from 'react';
import AsideBar from '@c/asideBar/AsideBar'

const AsideBarList = () => {
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

  return (
    <>
      <AsideBar
        list={list}
      >
      </AsideBar>
      <h1 style={{width: '100%', height: '37px'}}></h1>
      <AsideBar
        list={list}
      >
      </AsideBar>
    </>
  );
}

export default AsideBarList;
