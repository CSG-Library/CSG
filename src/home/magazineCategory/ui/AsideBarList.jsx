import React from 'react';
import AsideBar from '@c/asideBar/AsideBar'

const AsideBarList = (props) => {
  const { categoryCate } = props
  const list1 = {
    title: '杂志分类',
    list: [
      {
        bookTypeId: 0,
        bookTypeName: '杂文选刊',
        bookTypeNum: 999 
      },
      {
        bookTypeId: 1,
        bookTypeName: '人民之友',
        bookTypeNum: 666 
      },
      {
        bookTypeId: 2,
        bookTypeName: '哲学社会学',
        bookTypeNum: 233 
      },
      {
        bookTypeId: 3,
        bookTypeName: '励志/成功',
        bookTypeNum: 1289 
      },
      {
        bookTypeId: 4,
        bookTypeName: '政治',
        bookTypeNum: 1138
      },
      {
        bookTypeId: 5,
        bookTypeName: '法律',
        bookTypeNum: 2378 
      }
    ]
  }
  const list2 = {
    title: '杂志阅读排行',
    list: [
      {
        bookTypeId: 0,
        bookTypeName: '风尚',
        bookTypeNum: 999 
      },
      {
        bookTypeId: 1,
        bookTypeName: '加油吧',
        bookTypeNum: 1236 
      },
      {
        bookTypeId: 2,
        bookTypeName: '意林',
        bookTypeNum: 1289 
      },
      {
        bookTypeId: 3,
        bookTypeName: '瑞丽',
        bookTypeNum: 1138 
      },
      {
        bookTypeId: 4,
        bookTypeName: 'OUT',
        bookTypeNum: 2370 
      }
    ]
  }
  return (
    <>
      <AsideBar
        list={list1}
        onChangeAsideCate={() => {}}
      >
      </AsideBar>
      <h1 style={{width: '100%', height: '37px'}}>1</h1>
      <AsideBar
        list={list2}
        onChangeAsideCate={() => {}}
      >
      </AsideBar>
    </>
  );
}

export default AsideBarList;
