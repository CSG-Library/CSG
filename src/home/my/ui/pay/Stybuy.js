import styled from 'styled-components'

const Stybox=styled.div`
  background:rgba(0,0,0,0.4);
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;

`
const Stybuy = styled.div`
  width: 974px;
  height: 918px;
  background: #fff;
  margin: 0 auto;
  left:0;
  top:0px;
  right:0;
  bottom:0;
  margin-top:10px;

  >.tit{ 
    height: 40px;
    background: #EEEEEE;
    font-size: 18px;   
    color: #666666;
    padding-left:20px;
    line-height:40px;
    display:flex;
    justify-content:space-between;
    span{
      width:19px;
      height:19px;
      margin-right:10px;
    }
  }
  >div:nth-child(2){
    height:163px;
    display:flex;
    >div{
      width: 200px;
      height: 60px;   
      border: 1px solid #EEEEEE;
      text-align:center;
      line-height:60px;
      margin-top:52px;
      font-size:18px;   
      color: #666666;
      float: left;
      position: relative;
      margin-left:230px;
      >span{
        display:inline-block;
        font-size:39px;
        margin-right:9px;
        color:green;
        .yo-ico{
          width:39px;
          height:39px;
          background-color:skyblue;
        }
      }
    
      >p{
        /* display:none; */
        position: absolute;
        right: 0;
        bottom: 0;
        border-style: solid;
        border-width: 0px 0px 35px 35px;
        border-color: transparent transparent #EB6100 transparent;
        width: 0px;
        height: 0px;
        svg{
          position: absolute;
          left:-22px;
          bottom:-35px;
        }
      }
      &.active{
        border:1px solid #EB6100;
      }
    }
  }

  h3{
    width: 152px;
    height: 51px;
    background: #EB6100;
    line-height:51px;
    text-align:center;
    margin:0 auto;
    font-size:20px;
    font-weight:normal;
    color:#FFFFFF;
  }
`
const StyPric=styled.div`
  margin-top:51px;
  ul{
    display:flex;
    flex-direction:row;
    column-count:3;
    flex-wrap:wrap;
    padding:0 0 0 77px;
    li{
      width: 234px;
      height: 206px;
      border: 1px solid #EEE;
      border-radius: 10px;
      margin-bottom:51px;
      position:relative;
      margin-right:33px;
      div:first-child{
        width: 234px;
        height: 94px;
        font-size: 30px;
        line-height:110px;
        text-align:center;
        font-family: Microsoft YaHei;
        font-weight: 400;
        color: #666666;
      }
      div:nth-child(2){
        /* position:absolute; */
        margin:0 auto;
        width: 129px;
        height: 64px;
        background: #EE741E;
        border-radius: 32px;
        p:first-child{
          padding-top:10px;
          font-size:16px;
          color:#ccc;
          text-align:center;

        }
        p:last-child{
          height:32px;
          line-height:32px;
          font-size:16px;
          color:#F90808;
          text-align:center;
          font-weight:bold;
        }
      }
      >h6{
        /* display:none; */
        position: absolute;
        right: 0;
        bottom: 0;
        border-style: solid;
        border-width: 0px 0px 45px 45px;
        border-color: transparent transparent #EB6100 transparent;
        width: 0px;
        height: 0px;
        svg{
          position: absolute;
          left:-30px;
          bottom:-48px;
        }
      }
      &.active{
        border:1px solid #EB6100;
      }
    } 
  }
`

export {
  Stybox,
  Stybuy,
  StyPric,
} 