import React from 'react';
// import PropsTypes from 'prop-types';

import { Title, Div2 } from './styleRank';
import Aside from './Aside';
import RankCom from './RankCom';

const RankPopUi = (props) => {
   return (
      <>
         <Title width='0 0 1px 0'><span>热门排行</span></Title>
         <Div2>
            <Aside></Aside>
            <RankCom></RankCom>
         </Div2>
      </>
   )
}

export default RankPopUi