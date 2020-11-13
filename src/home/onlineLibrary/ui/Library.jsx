import React,{ useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import { LibraryWrap } from './StyledLibrary'

const Library = (props) => {
  
  let history = useHistory()
  const handleClick = useCallback(({id}) => {
    return () => {
      localStorage.setItem('libraryId',id)
      history.push('/home/onlinedet', {id})
    }
  }, [history])
  
  return (
    <>
      <LibraryWrap>
        <div className="container">
          <h1>
            <span>图书馆</span>
          </h1>

          <ul >
            {
              props && props.list.map(v => 
                <li key={v.id} onClick={handleClick(v)}>
                  <img src={v.libraryImg} alt=""/>
                  <h3  >{v.library}</h3>
                  <p>{v.introduce}</p>
                </li>  
              )
            }
          </ul>
        </div>
      </LibraryWrap>
    </>
  );
}

export default Library;
 