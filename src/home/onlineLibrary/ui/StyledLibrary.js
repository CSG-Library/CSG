import styled from 'styled-components'

const LibraryWrap = styled.div`
  width: 100%;
  overflow: hidden;
  div.container{
    width: 1199px;
    overflow: hidden;
    margin: 0 auto;
    h1{
      height: 50px;
      border-bottom: 1px solid #eee;
      font-size: 18px;
      color: #319DF7;
      line-height: 50px;
      margin-bottom: 50px;
      span{
        display: inline-block;
        width: 89px;
        text-align: center;
        /* border-bottom: 2px solid #319DF7; */
        position: relative;
      }
      span::after{
        position: absolute;
        content: '';
        width: 89px;
        height: 2px;
        background-color: #319DF7;
        left: 0;
        bottom: -1px;
      }
    }

    ul>li{
      width: 373px;
      float: left;
      margin-right: 40px;
      margin-bottom: 81px;
      &:nth-child(3n){
        margin-right: 0;
      }
      img{
        width: 373px;
        height: 233px;
        margin-bottom: 16px;
        cursor: pointer;
      }
      h3{
        font-size: 16px;
        color: #666;
        height: 26px;
        line-height: 26px;
      }
      p{
        font-size: 14px;
        color: #999;
        line-height: 26px;
        font-family: MicrosoftYaHei;
      }
    }
  }
`

export {
  LibraryWrap
}