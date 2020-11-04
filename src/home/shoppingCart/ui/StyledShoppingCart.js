import styled from 'styled-components'

const ShoppingCartUiWrap = styled.div`
  margin-top: 30px;
  width: 100%;
  overflow: hidden;
  div.container{
    width: 1199px;
    overflow: hidden;
    margin: 0 auto;
    div.shoppList{
      width: 100%;
      overflow: hidden;
      display: flex;
      justify-content: center;
    }
    div.pay-content{
      width: 100%;
      height: 100px;
      margin-top: 15px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      span{
        color: #197bc9;
        font-size: 20px;
      }
      .pay-btn{
        width: 168px;
        height: 30px;
        background-color: #7fa6c5;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
        color: #fff;
      }
    }
  }

`

const ShoppingCartListWrap = styled.table`
  width: 1000px; 
  overflow: hidden;
  border-bottom: 2px solid #ddd;
  thead{
    overflow: hidden;
    tr{
      text-align: center;
      th{
        padding: 15px 5px;
      }
      th:nth-child(1){
        input{
          margin-right: 38px;
        }
      }
    }
  }
  tbody{
    font-size: 14px;
    tr{
      height: 100px;
    }
    td:nth-child(1){
      position: relative;
      input{
        float: right;
        margin-right: 5px;
        /* position: absolute; */
        /* margin-top: 25px; */
      }
      img{
        width: 68px;
        height: 68px;
        float: right;
        margin-right: 10px;
        /* position: absolute; */
        /* margin-top: 25px; */
      }
    }
    td:nth-child(2){
      font-size: 14px;
      color: #878787;
      position: relative;
      p{
        /* padding-bottom: 20px; */
        /* position: absolute;
        top: 35%; */
        float: left;
      }
    }
    td:nth-child(3){
      text-align: center;
      input{
        width: 24px;
        height: 18px;
        border: none;
        text-align: center
      }
      span{
        font-weight: bold;
        color: #666;
        cursor: pointer;
        display: inline-block;
        width: 25px;
        height: 10px;
      }
    }
    td:nth-child(4),td:nth-child(5),td:nth-child(6){
      text-align: center;
      color: #666;
      span{
        cursor: pointer;
      }
    }
  }
`

export {
  ShoppingCartUiWrap,
  ShoppingCartListWrap
}