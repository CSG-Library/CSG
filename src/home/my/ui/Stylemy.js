import styled from 'styled-components'

const SLeft = styled.div`
   display:flex;
  margin-top:30px;
  background: #fff;
  >ul{
    width: 345px;
    height: 700px;
    background: #EEEEEE;
    >li{
      width: 335px;
      height: 72px;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
      padding-left:50px;
      line-height:72px;
      border-bottom:1px solid #ccc;
      &.active{
        background-color:#fff;
        width: 345px;
        height: 72px;
        &::before{
          content:'';
          border:1px solid skyblue;
          margin-right:10px;
          height:24px;
        }
      }
    }
    >:first-child{
      border-top:1px solid #ccc;
    }   
  }
`

const StyLeft = styled.div`
  display:flex;
  margin-top:30px;
  background: #fff;
  >ul{
    width: 345px;
    height: 700px;
    background: #EEEEEE;
    >li{
      width: 335px;
      height: 72px;
      font-size: 18px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
      padding-left:50px;
      line-height:72px;
      border-bottom:1px solid #ccc;
      &.active{
        background-color:#fff;
        width: 345px;
        height: 72px;
        &::before{
          content:'';
          border:1px solid skyblue;
          margin-right:10px;
          height:24px;
        }
      }
    }
    >:first-child{
      border-top:1px solid #ccc;
    }   
  }
`
const StyAcco = styled.div`
  margin-left:54px;
  margin-top:72px;
  >div:first-child,div:nth-child(2){
    width: 810px;
    height: 90px;
    background: #FFE9D2;
    .box{
      width: 100px;
      height: 37px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
      float:left;
      padding:20px 0 10px 0px;
      >p{
        width: 100px;
        height: 17px;
        margin-bottom:10px;
        &::before{
          content:'';
          border:1px solid #FF9B32;
          margin-right:20px;
          display:inline-block;
          height:15px;
          >&::before:last-child{
            width:0;
            height:0;
            display:none;
          }
        }
      }
      >span{
        width: 53px;
        height: 20px;
        font-size: 20px;
        font-family: Microsoft YaHei;
        font-weight: bold;
        color: #FF9B32;
        padding-left:21px;
      }
    }
    
    >div:nth-child(2){
      float:left;
      width: 200px;
      height: 30px;
      background: #FF9B32;
      margin:32px 0 28px 142px;
      text-align:center;
      line-height:30px;
      color:#fff;
      position: relative;
    }
    .desc{
      /* display:none; */
      position: absolute;
      top:395px;
      left:545px;
      width: 496px;
      height: 262px;
      background: #FDFDFC;
      border: 1px solid #EEEEEE;
      padding:10px 42px 0 0;
      h2{
        width: 496px;
        height: 17px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #319DF7;
        margin:10px 0;
        padding-left:26px;
        
      }
      p{
        color: #666666;     
        line-height: 20px;
        font-size: 14px;
        padding-left:31px;
      }
    }
  }
  >div:nth-child(2){
    width: 810px;
    height: 90px;
    
    background: #DCF4FF;
    .box{
      >p{
        width:150px;
        &::before{
          content:'';
          border:1px solid #00A0E9;
          margin-right:20px;
          display:inline-block;
          height:15px;
        }
      }
      >span{
        color:#00A0E9;
      }
    }
    >div:last-child{
      background-color:#fff;
      font-size:16px;
      color:#ADE1F7;
    }
  }
  >div:nth-child(3){
   
    >ul{
      width: 810px;
      height:100px;     
      >li{
        float:left;
        width:140px;
        height: 100px;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        text-align:left;
        border-bottom:0;
        text-align:left;
        margin-right:35px;
        display:flex;
        line-height:100px;
        text-align:center;
        &::after{
          content:'';
          border:1px solid #666;
          margin-left:35px;
          /* margin-right:15px; */
          display:inline-block;
          height:14px;
          margin-top:42px;
        }
      }
      >li:last-child::after{
        display:none;
      }
    }
  }
  >div:last-child{
    width: 810px;
    min-height: 104px;
    border: 1px solid #EEEEEE;
    >table{
      width: 810px;
      min-height: 104px;
      >thead{
        width: 810px;
        height:52px;
        background: #EDF5FA;
        line-height:52px;
        text-align:center;
      }
      >tbody{
        
      }
      >tfoot{
        width:810px;
        height: 52px;
        background-color:pink;
        font-size: 16px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
        line-height:52px;
        text-align:center;
        >th{
          width:810px;
          height: 52px;
          background-color:pink;
          text-align:center;
          font-size: 16px;
          font-weight: 400;
          color: #666666;
        }
      }  
    }
  }
`


const StyPay = styled.div`
  /* width: 974px;
  height: 918px;
  background: #FFFFFF; */
  .ant-modal-content{
    width: 974px;
    height: 918px;
    background: #FFFFFF;
    .ant-modal-header{
      width: 974px;
      height: 40px;
      background: #EEEEEE;
      .ant-modal-title{
        width: 109px;
        /* height: 18px; */
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
      }
    }
  }
  
`


const StyBook = styled.div`
  margin-left:55px;
  margin-top:30px;
  width: 810px;
  height:100%;
  overflow:hidden;
  >div:first-child{
    height:70px;
    border-bottom:1px solid #eee;
    h1{
      height:40px;
      font-size: 18px;
      line-height:40px;
      font-weight: 400;
      color: #666666;
    }
    h5{
      height:30px;
      width: 300px;
      font-size:16px;
      font-weight:400;
      text-align:center;
      line-height:30px;
      display:flex;
      p{
        margin-right:50px;
        width:84px;
        background: #319DF7;
        color:#FFF;
      }
    }
  }
  >div:nth-child(2){
    ul{
      li{
        height:310px;
        display:flex;
        /* margin:67px 0; */
        padding-top:67px;
        border-bottom:1px solid #eee;
        input{
          width:30px;
          height:30px;
          margin:73px 50px 0 10px;
        }
        .tp{
          width: 140px;
          height: 176px;
          border:1px solid red;
          background-color:pink;
          img{
            width:100px;
            height:100%;
          }
        }
        .box{
          margin-left:30px;
          .txt{
            display:flex;
            width:520px;
            margin:20px 0 0px 0px;
            height:16px;
            font-size: 16px;
            font-weight: 400;
            color: #666666;
            justify-content:space-between;
            h3{
              font-size: 14px;
              font-weight: 400;
              color: #999999;
            }
          }
          .info{
            display:flex;
            justify-content:space-between;
            margin:36px 0;
            line-height: 14px;
            font-size: 14px;
            font-weight: 400;
            color: #999999;
          }
          .num{
            display:flex;
            justify-content:space-between;
            font-size: 14px;
            font-weight: 400;
            color: #999999;
            button{
              width:80px;
              height:40px;
              background-color:#319DF7;
              color:#fff;
              font-size:20px;
            }
          }
        }
        
      }
    }
  }
  >div:last-child{
    width:200px;
    height:50px;  
    font-size: 20px;
    font-weight: 400;
    color: #999999;
    margin-left:580px;
    margin-top:10px;
  }
`


const StyDatum = styled.div`
  /* margin-left:55px; */
  margin-top:30px;
  width: 810px;
  height:100%;
  /* >div:first-child{
    height:72px;
    display:flex;
    width: 810px;
    border-bottom:1px solid #eee;
    margin-bottom:110px;
    h1{
      margin-left:64px;
      margin-top:36px;
      line-height: 16px;
      font-size: 16px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      width:90px;
      &::after{
        content:'';
        border:1px solid #EAEAEA;
        margin:0px 23px;
        height:16px;
      }
    }
    >h3{
      margin-top:36px;
      width: 64px;
      line-height: 16px;
      font-size: 16px;
      font-weight: 400;
      color: #666666;
      margin-left:26px;
    }
  } */
  >div:last-child{
    margin-left:36px;
    font-size: 16px;
    color: #666666;
    margin-right:25px;
    input{
      margin:0px 0 30px 25px;
      width: 177px;
      height: 30px;
      border: 1px solid #EEEEEE;
    }
    p{
      width: 196px;
      line-height: 15px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
      color: #666666;
      margin-left:80px;
      margin-bottom:30px;
      span{
        color:#319DF7
      }
    }
    button{
      display:block;
      width: 88px;
      line-height: 31px;
      background: #319DF7;
      text-align:center;
      font-size: 16px;
      margin-left:82px;
      font-weight: 400;
      color: #FFFFFF;
    }
  }
  
`

const StyData=styled.div`
  margin-left:85px;
  margin-top:30px;
  /* margin-left:36px; */
  width: 810px;
  height:100%;
  font-size:16px;
  color:#666;
  .ant-tabs-tabpane{
    font-size:16px;
    color:#666;
    margin-top:30px;
    label{
      margin:0 25px;
      input{
        width:16px;
        height:16px;
        margin-bottom:30px;
      }
    }
    textarea{
      width:266px;
      height:54px;
      border:1px solid #EEEEEE;
      margin-left:50px;
    }
  }
  
  input{
    margin:0px 0 30px 25px;
    width: 177px;
    height: 30px;
    font-size:16px;
    border: 1px solid #EEEEEE;
  }
  p{
    width: 196px;
    line-height: 16px;
    font-size: 16px;
    font-family: Microsoft YaHei;
    font-weight: 400;
    color: #666666;
    margin-left:80px;
    margin-bottom:30px;
    span{
      color:#319DF7
    }
  }
  button{
    display:block;
    width: 88px;
    line-height: 31px;
    background: #319DF7;
    text-align:center;
    font-size: 16px;
    margin-left:82px;
    font-weight: 400;
    color: #FFFFFF;
  }
`
export {
  SLeft,
  StyLeft,
  StyAcco,
  StyPay,
  StyBook,
  StyDatum,
  StyData,

}