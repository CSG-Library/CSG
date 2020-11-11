import React from 'react';

import { Ul } from '@c/styleComp';

import useSaveState from './useSaveState';

const NavTwo = () => {
   const { text, curIndex, handleClick } = useSaveState()

   return (
      <Ul>
         {
            text.map((v, i) => {
               return (<li
                  key={i}
                  className={Number(curIndex) === i ? 'active' : ''}
                  onClick={handleClick(v, i)}
               >{v[Object.keys(v)]}</li>)
            })
         }
      </Ul>
   )
}

export default NavTwo
