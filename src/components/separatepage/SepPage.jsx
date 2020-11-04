import React, { useCallback, useState } from 'react';

import { Pagination } from 'antd';
import { Sepwrap } from './styleSepPage';

const SepPage = props => {
   // console.log(props)
   const [current, setCurrent] = useState(1);
   const onChange = useCallback(page => {
      // console.log(page)
      setCurrent({ current: page })
   },[])

   return (
      <Sepwrap>
         <Pagination
            defaultCurrent={current}
            onChange={onChange}
            pageSize={6}
            total={50}
         />
      </Sepwrap>
   )
}

export default SepPage