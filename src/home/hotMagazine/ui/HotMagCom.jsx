import React from 'react';
// import PropsTypes from 'prop-types';

import UlWrap from '@c/booklist/UlWrap';
import { HotMagWrap } from './styleHotMag';

const HotMagCom = (props) => {
   return (
      <HotMagWrap>
         <UlWrap currentPageList={props.currentPageList}></UlWrap>
      </HotMagWrap>
   )
}

export default HotMagCom