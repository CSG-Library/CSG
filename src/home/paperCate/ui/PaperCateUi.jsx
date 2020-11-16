import React from 'react';
import PropsTypes from 'prop-types';

import { Div2 } from './stylePaperCate';

import AsideBar from './AsideBar';
import Maga from './magazine';
import Company from './company';
import Media from './media';

const PaperCateUi = (props) => {
   // console.log(props)
   return (
      <>
         <AsideBar></AsideBar>
         <Div2>
            <Maga cate={props && props.cate}></Maga>
            <Company cate={props && props.cate}></Company>
            <Media cate={props && props.cate}></Media>
         </Div2>
      </>
   )
}
// 函数式组件 绑定类型检查 
PaperCateUi.propTypes = {
   cate: PropsTypes.array
}

export default PaperCateUi;