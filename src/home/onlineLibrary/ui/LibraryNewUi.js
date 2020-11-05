import React from 'react'

import { LibraryContent } from './StyledLibrary'
const LibraryNewUi = (props) => {
  
   const data =props.data[0]
   
   return (
      <>
         <LibraryContent>
            <h2>图书馆详情</h2>
            <p className='line'></p>

            <div>
               <div className="left">
                  <h2>馆藏实力</h2>
                  <ul>
                     {data && data.content.map(v =>
                        <li key={v.title}>
                           <h3>{v.title}</h3>
                           <p>{v.content}</p>
                        </li>
                     )}
                  </ul>
               </div>
               <div className="right">
                  <img src={data && data.libraryPic} alt="" />
                  <p>网址： <span><a href={data && data.url}>{data && data.url}</a></span> </p>
               </div>
            </div>
         </LibraryContent>
      </>
   )
}

export default LibraryNewUi
