import React from 'react';
import { withRouter, NavLink } from 'react-router-dom';

import ChapterDetUi from '../detUi/ChapterDetUi';

const ChapterDet = (props) => {
   const { url } = props.match;
   return (
      <NavLink to={`${url}?book_id=0`}>
         <ChapterDetUi  {...props}></ChapterDetUi>
      </NavLink>
   )
}

export default withRouter(ChapterDet)
