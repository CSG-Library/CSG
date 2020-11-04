import styled from 'styled-components'

const PagerWrap = styled.div`
  /* width: 189px; */
  height: 37px;
  /* float: right; */
  span{
    /* display: inline-block; */
    float: left;
    width: 37px;
    height: 37px;
    display: flex;
    background-color: #eee;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &.active{
      color: #319DF7;
    }
  }
  .left-btn,.right-btn{
    width: 19.5px;
    height: 37px;
    background-color: #319DF7;
  }
`


export {
  PagerWrap
}