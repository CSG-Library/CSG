import styled from 'styled-components'

const StyLogin=styled.div`
  width:100%;
  height:100%;
  >div:first-child{
    height:60px;
    background-color:#eee;
    .tp{
      width:200px;
      height:60px;
      margin-left:50px;
      img{
        width:100%;
        height:100%;
      }
    }
  }
  .box{
    height:700px;
    background-color: #fff;
    margin:auto;
    .login-form{
      width:400px;
      height:400px;
      background-color:pink;
      margin:auto;
      padding-top:50px;
    }
    .site-form-item-icon{
      width:30px;
      height:40px;
      text-align:left;
      line-height:40px;
      font-size:20px;
    }
    .ant-form-item-control-input-content{
      font-size:20px;
    }
    .ant-checkbox-wrapper {
      padding-left:40px;
    }
    .login-form-forgot{
      margin-left:20px;
    }
    .login-form-button{
      width:80px;
      height:40px;
      margin:0 40px;
      font-size:20px;
    }

  }
  
`


const StyReg=styled.div`
  width:100%;
  height:100%;
  >div:first-child{
    height:60px;
    background-color:#eee;
    .tp{
      width:200px;
      height:60px;
      margin-left:50px;
      img{
        width:100%;
        height:100%;
      }
    }
  }
  .box{
    height:700px;
    background-color:yellow;
    margin:auto;
    .ant-form {
      width:400px;
      height:400px;
      background-color:pink;
      margin:auto;
      padding-top:50px;
      label{
        font-size:20px;
      }
      .ant-input{
        width:200px;
        height:30px;
      }
      .ant-btn{
        width:80px;
        height:40px;
        font-size:16px;
       
        
      }
    }
    
  }
`
export{
  StyLogin,
  StyReg
}