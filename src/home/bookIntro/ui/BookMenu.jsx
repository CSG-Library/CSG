import React, { useState, useCallback }/* , { Component }  */ from 'react';
import { useHistory } from 'react-router-dom';

import { TitleWraper, BookMenuWraper } from './StyledIntroduce'

const MenuList = [
   { id: 0, title: '第一章 落魄王子' },
   { id: 1, title: '第二章 活着的艰难' },
   { id: 2, title: '第三章 只是凡根'},
   { id: 3, title: '第四章 一饭之恩' },
   { id: 4, title: '第五章 有些事情我很忌' },
   { id: 5, title: '第六章 丹汉炼药' },
   { id: 6, title: '第七章 首席炼药师' },
   { id: 7, title: '第八章 极品灵根' },
   { id: 8, title: '第九章 无实力无尊严' },
   { id: 9, title: '第十章 一线曙光' },
   { id: 10, title: '第十一章 就是你了' },
   { id: 11, title: '第十二章 将轰动炼药界' },
   { id: 12, title: '第十三章 莫无忌的担忧' },
   { id: 13, title: '第十四章 轰动的九命疗伤' },
   { id: 14, title: '第十五章 火爆再现' },
   { id: 15, title: '第十六章 开拓经脉' },
   { id: 16, title: '第十七章 功亏一篑' },
   { id: 17, title: '第十八章 终于明白' },
   { id: 18, title: '第十九章 推出去杀了' },
   { id: 19, title: '第二十章 生死之间' },
   { id: 20, title: '第二十一章 寻找退路' },
   { id: 21, title: '第二十二章 加入寒府' },
   { id: 22, title: '第二十三章 你就是莫无忌？' },
   { id: 23, title: '第二十四章 雷雾森林' },
   { id: 24, title: '第二十五章 被逼入雷雾森林' },
   { id: 25, title: '第二十六章 雷雾森林的雷泽' }
]

const BookMenu = () => {
   let [menuList] = useState(MenuList)

   let [isShow, setIsShow] = useState({ show: false })

   let [state, setState] = useState(0)

   let style1 = {
      height: 52,
   }
   let style2 = {
      height: '100%',
      backgroundColor: '#d84',
   }
   let history = useHistory()
   const handleClick1 = useCallback((v) => {
      return () => {
         setState(() => {
            let newstate = v.id
            return newstate
         })
         history.push('/home/chapterpage', { book_id: v.id })
      }
   }, [history])

   const handleClick2 = () => {
      setIsShow({ show: !isShow.show })
   }

   return (
      < BookMenuWraper>
         <TitleWraper width="0 0 1px 0">
            <span>书籍目录</span>
         </TitleWraper>
         <ul style={isShow.show ? style2 : style1}>
            {
               menuList.map((v, i) => (<li
                     key={i}
                     onClick={handleClick1(v)}
                     className={v.id === state ? 'active' : ''}
                  >
                     <span>{v.title}</span>
                  </li>)
               )
            }
         </ul>
         <div className='iconfont' onClick={handleClick2}>
            { isShow.show ? '收起更多 \ue602' : '查看更多 \ue601' }
         </div>
      </ BookMenuWraper>
   );
}

export default BookMenu;