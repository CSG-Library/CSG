import styled from 'styled-components'

const AsideBarWrap = styled.div`
  h3{
    width: 141px;
    height: 41px;
    text-align: center;
    line-height: 41px;
    background-color: #319DF7;
    color: #fff;
    font-size: 16px;
  }
  ul{
    width: 141px;
    background: #F7F7F7;
    overflow: hidden;
    li{
      text-align: center;
      margin: 36px 0;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
      cursor: pointer;
      &.active{
        color: #319DF7;
      }
    }
  }
`
 
export {
  AsideBarWrap
}