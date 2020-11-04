import styled from 'styled-components'

const BookCategoryWrap = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 58px;
  .container{
    width: 1199px;
    overflow: hidden;
    margin: 30px auto 0;
    section{
      width: 1033px;
      float: right;
      overflow: hidden;
      h2{
        width: 100%;
        height: 40px;
        font-size: 16px;
        background-color: #319DF7;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        color: #fff;
        margin-bottom: 55px;
        span{
          margin: 0 9px;
        }
      }

      ul{
        li{
          width: 476px;
          float: left;
          height: 181px;
          display: flex;
          margin: 0 16px 60px 16px;
          justify-content: flex-start;
          &:nth-child(odd){
            margin-right: 32px;
          }
          img.book-img{
            width: 123px;
            height: 181px;
            margin-right: 29px;
          }
          div.book-content{
            flex: 1;
            h3{
              font-size: 18px;
              color: #666666;
              span{
                display: inline-block;
                width: 50px;
                height: 25px;
                color: #fff;
                background: #319DF7;
                text-align: center;
                line-height: 25px;
                margin-left: 41px;
                font-size: 16px;
              }
            }
            h4{
              color: #666666;
              height: 32px;
              line-height: 32px;
              font-size: 16px
            }
            p{
              font-size: 14px;
              /* height: 26px; */
              line-height: 26px;
              color: #999;
              margin-bottom: 26px;
            }

            div{
              span{
                float: left;
                display: flex;
                align-items: center;
                /* width: 63px; */
                height: 20px;
                font-size: 14px;
                color: #319DF7;
                cursor: pointer;
                img{
                  width: 21px;
                  height: 17px;
                  margin-right: 5px; 
                }
                &.comment{
                  margin-right: 11px;
                }
                &.to-bookshelf-btn{
                  margin-right: 16px;
                  img{
                    width: 17px;
                    height: 17px;
                  }
                }
                &.recommend-btn{
                  img{
                    width: 14px;
                    height: 17px;
                  }
                }
                &.add-shoppingcart-btn{
                  float: right;
                  img{
                    width: 18px;
                    height: 18px;
                  }
                }
              }
            }
          }
        }
      }

      div.paging{
        /* width: 189px; */
        height: 37px;
        float: right;
        background-color: #666666;
        span{
          /* display: inline-block; */
          float: left;
          width: 37px;
          height: 37px;
          display: flex;
          background-color: #eee;
          justify-content: center;
          align-items: center;
          &.active{
            color: #319DF7;
          }
        }
        .left-btn,.right-btn{
          width: 19.5px;
          height: 37px;
          background-color: #319DF7;
        }
      }
    }
  }
`


const AsideTab = styled.aside`
  width: 141px;
  float: left;
  overflow: hidden;
`

const PagerWrap = styled.div`
  float: right;
`

const BookRecommendWrap = styled.div`
  width: 100%;
  overflow: hidden;
  margin-bottom: 96px;
  .container{
    width: 1199px;
    overflow: hidden;
    margin: 0 auto;
    h2{
      width: 100%;
      height: 40px;
      background-color: #319DF7;
      font-size: 18px;
      color: #fff;
      line-height: 40px;
      text-indent: 14px;
      margin-bottom: 30px;
    }
    div.left-content{
      width: 306px;
      height: 562px;
      background-color: #F6F6F6;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      color: #666;
      margin-right: 26px;
      float: left;
      img{
        width: 135px;
        height: 196px;
        margin-top: 24px;
        margin-bottom: 21px;
      }
      h4.title{
        font-size: 18px;
      }
      h5.author{
        font-size: 14px;
        height: 52px;
        line-height: 52px;
      }
      p{
        width: 210px;
        font-size: 14px;
        line-height: 26px;
        margin-bottom: 32px;
      }
      div.read-btn{
        width: 156px;
        height: 41px;
        background-color: #319DF7;
        color: #fff;
        text-align: center;
        line-height: 41px;
        cursor: pointer;
      }
    }

    div.right-content{
      float: left;
      color: #666;
      ul{
        li{
          width: 222px;
          height: 562px;
          float: left;
          margin-left: 82px;
          &.first-li{
            margin-left: 0;
          }
          h3{
            padding-top: 17px;
            font-size: 18px;
            margin-bottom: 35px;
            span{
              float: right;
              color: #319DF7;
              font-size: 16px;
              cursor: pointer;
              margin-top: 2px;
            }
          }
          div.book-content{
            width: 100%;
            overflow: hidden;
            display: flex;
            margin-bottom: 45px;
            img{
              width: 100px;
              height: 147px;
              margin-right: 12px;
            }
            div{
              flex: 1;
              display: flex;
              flex-direction: column;
              justify-content: space-around;
              h5{
                font-size: 16px;
              }
              p{
                font-size: 14px;
              }
            }
          }
          ul>li{
            margin: 0;
            color: #666;
            height: 16px;
            margin-bottom: 36px;
            span{
              color: #999;
              font-size: 16px;
              margin-right: 14px;
            }
          }
        }
      }
    }
  }
`

export {
  AsideTab,
  BookCategoryWrap,
  BookRecommendWrap,
  PagerWrap
}