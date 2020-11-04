import React from 'react';

import { SmallTitleWrap } from './StyledSmallTitle'

const SmallTitle = (props) => {
  return (
    <SmallTitleWrap>
      <span>{props.title}</span>
    </SmallTitleWrap>
  );
}

export default SmallTitle;
