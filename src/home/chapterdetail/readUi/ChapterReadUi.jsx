import React from 'react';
// import PropsTypes from 'prop-types';

import { Div2 } from '../detUi/styleChapterDet';
import Aside from '../detUi/Aside';
import Page from './Page';
import More from '../detUi/More';

const ChapterReadUi = (props) => {
   return (
      <>
         <Div2>
            <Aside></Aside>
            <Page></Page>
            <More></More>
         </Div2>
      </>
   )
}

export default ChapterReadUi