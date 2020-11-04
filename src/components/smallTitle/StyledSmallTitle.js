import styled from 'styled-components'

const SmallTitleWrap = styled.h1`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid #eee;
  font-size: 18px;
  color: #319DF7;
  line-height: 50px;
  margin-bottom: 37px;
  span{
    display: inline-block;
    /* width: 89px; */
    padding: 0 13px;
    text-align: center;
    /* border-bottom: 2px solid #319DF7; */
    position: relative;
  }
  span::after{
    position: absolute;
    content: '';
    width: 100%;
    height: 2px;
    background-color: #319DF7;
    left: 0;
    bottom: -1px;
  }
`

export {
  SmallTitleWrap
}