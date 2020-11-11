import React from 'react'
import { withRouter } from 'react-router-dom';

import ChapterDetUi from '../detUi/ChapterDetUi';

const ChapterDet = (props) => {
   return (
      <ChapterDetUi  {...props}></ChapterDetUi>
   )
}

export default withRouter(ChapterDet)