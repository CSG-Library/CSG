import React from 'react';

import { AsideBarWrap } from './StyledAsideBar'

const AsideBar = (props) => {
  // console.log(props)
  let { title, list } = props.list
  const { asideCate, onChangeAsideCate } = props
  return (
    <AsideBarWrap>
      <h3>{title}</h3>  
      <ul>
        {
          list.map(item => {
            return (
              <li 
                key={item.cateId}
                className={asideCate === item.cateName ? 'active' : ''}
                onClick={() => onChangeAsideCate(item.cateName)}
              >{item.cateName}（{item.num}）</li>
            )
          })
        }
      </ul>
    </AsideBarWrap>
  );
}

export default AsideBar;
