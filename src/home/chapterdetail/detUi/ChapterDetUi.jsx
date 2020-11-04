import React from 'react';
// import PropsTypes from 'prop-types';

import { Div2 } from './styleChapterDet';
import Aside from './Aside';
import Chapter from './Chapter';
import More from './More';

import SepPage from "@c/separatepage/SepPage";

const ChapterDetUi = (props) => {
   return (
      <>
         <Div2>
            <Aside></Aside>
            <Chapter></Chapter>
            <More></More>
         </Div2>
         <SepPage {...props}></SepPage>
      </>
   )
}

export default ChapterDetUi