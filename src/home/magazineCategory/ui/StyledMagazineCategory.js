import styled from 'styled-components'

const MagazineCategoryWrap = styled.div`
  width: 100%;
  overflow: hidden;
  div.container{
    width: 1199px;
    overflow: hidden;
    margin: 0 auto;
    div.left-aside{
      width: 141px;
      float: left;
      overflow: hidden;
    }
    div.right-content{
      width: 1033px;
      float: right;
      overflow: hidden;
    }
  }
`

const MagazineListWrap = styled.div`
  overflow: hidden;
  margin-bottom: 30px;
  ul{
    margin-bottom: 33px;
    overflow: hidden;
    li{
      width: 153px;
      float: left;
      margin-right: 66px;
      margin-bottom: 37px;
      &:nth-child(5n){
        margin-right: 0;
      }
      img{
        width: 153px;
        height: 224px;
        margin-bottom: 15px;
      }
      p{
        text-align: center;
      }
    }
  }
`

const PagerWrap = styled.div`
  float: right;
`

const HotRecommendWrap = styled.div`
  /* width: 498px; */
  float: left;
  overflow: hidden;
  ul{
    margin-top: 26px;
    li{
      float: left;
      width: 143px;
      margin-bottom: 50px;
      margin-right: 35px;
      &:last-child{
        margin-right: 0;
      }
      img{
        width: 143px;
        height: 143px;
        margin-bottom: 15px;
      }
      h3{
        text-align: center;
        font-size: 14px;
        color: #666;
        margin-bottom: 10px;
      }
      p{
        width: 145px;
        line-height: 23px;
        font-size: 14px;
        color: #999;
        span{
          color: #319DF7;
        }
      }
    }
  }
`

const NewListWrap = styled.div`
  width: 501px;
  float: right;
  .content{
    margin-top: 26px;
    padding-bottom: 21px;
    border-bottom: 1px solid #ddd;
    margin-bottom: 16px;
    overflow: hidden;
    img{
      width: 130px;
      height: 130px;
      float: left;
    }
    .new-right-content{
      width: 350px;
      float: right;
      h3{
        line-height: 32px;
        height: 32px;
        font-size: 16px;
        color: #666;
      }
      p{
        line-height: 24px;
        font-size: 14px;
        color: #999;
        span{
          color: #319DF7;
        }
      }
    }
  
  
  
  }

  ul{
    li{
      font-size: 14px;
      color: #666;
      overflow: hidden;
      margin-bottom: 16px; 
      p{
        width: 437px;
        float: left;
      }
      span{
        color: #319DF7;
        float: right;
      }
    }
  }
`

export {
  MagazineCategoryWrap,
  MagazineListWrap,
  PagerWrap,
  HotRecommendWrap,
  NewListWrap
}