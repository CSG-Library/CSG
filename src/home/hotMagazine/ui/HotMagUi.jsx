import React from 'react'
// import PropsTypes from 'prop-types';

import { Title } from './styleHotMag';
import HotMagCom from './HotMagCom';
import SepPage from "@c/separatepage/SepPage";

const HotMagUi = (props) => {
   return (
      <>
         <Title width='0 0 1px 0'><span>热门文章</span></Title>
         <HotMagCom></HotMagCom>
         <SepPage {...props}></SepPage>
      </>
   )
}

export default HotMagUi