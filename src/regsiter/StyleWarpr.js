import styled from 'styled-components'

const StyReg=styled.div`
  width:100%;
  height:100%;
  >div:first-child{
   width:100%;
   height:90px;
   display:flex;
   justify-content:center;
   align-items:center;
   img{
     height:60px;
   }
   span{
     margin-left:20px;
     color:#999;
     line-height:60px;
     font-size:24px;
     position: absolute;

   }
  }
  .box{
    height:700px;
    margin:auto;
    position: relative;
    background:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1605528139892&di=6d1a98418dcbeb5b44ed3753ac8ddef8&imgtype=0&src=http%3A%2F%2Fbpic.588ku.com%2Fback_origin_min_pic%2F20%2F04%2F12%2F10a04eaff9e6db052ee10d6c3b549ca2.jpg%2521%2Ffw%2F750%2Fquality%2F99%2Funsharp%2Ftrue%2Fcompress%2Ftrue')no-repeat  0  0 ;
    background-size:100% 100%;
    .ant-form {
      width:320px;
      height:400px;
      border-radius:10px;
      background-color:rgba(244,159,68,0.1);
      position: absolute;
      right:100px;
      top:0;
      bottom:0;
      margin:auto;
      label{
        font-size:20px;
      }
      h2{
        color:#888;
        font-size:24px;
        padding:20px;
      }
      .ant-input{
        width:200px;
        height:30px;
        border:none;
        border-radius:5px;
        font-size:16px;
      }
      .ant-btn{
        height:33px;
        font-size:16px;
        text-align:center;
        background-color:rgba(244,159,68,0.3);
        border:none;
        border-radius:5px;
        margin-top:20px;
        line-height:18px;
        font-size:18px;
        font-weight:900;
        &.abs{
          position: absolute;
          top:-77px;
          right:60px;
        }
        &:hover{
          background-color:rgba(244,159,68,0.6)
        }
        a{
          border:1px solid red;
          width:100px;
          height:50px;
        }
       
        
      }
    }
    
  }
`
export default StyReg