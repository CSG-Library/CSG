import styled from 'styled-components'

const MagazineWrap = styled.div`
  width: 100%;
  overflow: hidden;
  div.container{
    width: 1199px;
    overflow: hidden;
    margin: 0 auto;
    section{
      width: 940px;
      float: right;
      margin-bottom: 30px;
      h1{
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
      }

      ul{
        width: 100%;
        li{
          display: flex;
          width: 100%;
          margin-bottom: 56px;
          img{
            width: 97px;
            height: 106px;
            margin-right: 14px;
          }
          div.magazine-message{
            /* width: 100%; */
            flex: 1;
            height: 106px;
            h3{
              font-size: 14px;
              color: #666;
              height: 28px;
              line-height: 28px;
              margin-bottom: 4px;
              span{
                float: right;
                margin-right: 132px;
              }
            }
            p{
              font-size: 14px;
              color: #999;
              line-height: 25px;
            }
          }
        }
      }

      div.pager-wrap{
        display: flex;
        justify-content: center;
      }
    }
  }
`
const AsideTab = styled.aside`
  width: 141px;
  float: left;
  overflow: hidden;
  h3{
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
      &.active{
        color: #319DF7;
      }
    }
  }
`

export {
  AsideTab,
  MagazineWrap
}