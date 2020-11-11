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
      cursor: pointer;

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
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
      }
    }
  }
`
const LibraryContent = styled.div `
    width:1200px;
    display:flex;
    flex-direction:column;
    background-color:#f7fcff;
    >h2{
        width: 118px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        padding:0 9px 15px;
        color: #319DF7;
        margin-top:43px;
        border-bottom:2px solid #319DF7;
        z-index:2;
    }
    .line{
        border-bottom:1px solid #EEEEEE;
        margin-top:-1px;

    }
    >div{
        display:flex;
        justify-content:space-between;
        color: #666666;
        .left{
            h2{
                width: 72px;
                height: 18px;
                font-size: 18px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                margin-top:50px;
                margin-bottom:24px;
            }
            ul{
                display:flex;
                flex-direction:column;
                li{
                    width: 667px;
                    font-size: 16px;
                    font-weight: 400;
                    color: #666666;
                    margin-bottom:47px;
                    line-height:24px;
                    h3{
                        font-size:16px;
                        line-height:24px;
                    }
                    p{
                        font-size:14px;

                       
                    }
                    

                }
            }

        }
        .right{
            text-align:center;
            img{
                width: 438px;
                height: 325px;
                /* background: #FF9B32; */
                margin-top:122px;
            }
            p{
                margin-top:31px;
                height: 17px;
                font-size: 18px;
                font-weight: 400;
                color: #319DF7;

            }
        }
    }
`


export {
  LibraryWrap,
  LibraryContent
}