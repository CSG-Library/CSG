import React from 'react';

import ChapterReadUi from '../readUi/ChapterReadUi';

import { withRouter,  NavLink } from 'react-router-dom';

const ChapterRead = (props) => {
   const { url } = props.match;
   return (
      <NavLink to={`${url}?book_id=0`}>
         <ChapterReadUi  {...props}></ChapterReadUi>
      </NavLink>
   )
}

export default withRouter(ChapterRead)