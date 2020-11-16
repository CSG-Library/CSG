import React from 'react';

import Library from './Library'

const OnlineLibraryUi = (props) => {

  return (
    <>
      <Library list={props.list} />
    </>
  );
}
 
export default OnlineLibraryUi;
