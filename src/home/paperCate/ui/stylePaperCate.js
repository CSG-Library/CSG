import styled from 'styled-components';

const SideBar = styled.ul`
   margin: 46px 0 60px 0;
   width: 140px;
   text-align: center;
   font-size: 14px;
   color: #666666;
   float: left;
   li {
      height: 40px;
      line-height: 40px;
      background: #F7F7F7;
      &:first-child {
         font-size: 16px;
         color: #fff;
         font-weight: 400;
         background: #319DF7;
      }
      &.active {
         color: #319DF7;
      }
   }

`

const Div2 = styled.div`
   float: right;
   width: 940px;
   margin-top: 46px;
   >.cont {
      h2{
         font-size: 18px;
         height: 50px;
         line-height: 50px;
         border-bottom: 1px solid #EEEEEE;
         color: #319DF7;
         span{
            display: inline-block;
            text-align: center;
            border-bottom: 2px solid #319DF7;
         }
      }
   }
   >.cont-top {
      width: 940px;
      margin-bottom: 20px;
      h2 span{
         width: 101px;
      }
      .ant-row{
         margin-top: 14px;
         display: flex;
         flex-wrap: wrap;
         justify-content: space-between;
         align-items: center;
         font-size: 16px;
         color: #666666;
         line-height: 48px;
         .ant-col:nth-child(6n) {
            flex-basis: 80px;
         }
      }
   }
   >.cont-left {
      width: 450px;
      h2{
         width: 100%;
         span{
            width: 101px;
         }
      }
      ul{
         padding-top: 20px;
         width: 100%;
         text-align: center;
         display: flex;
         flex-wrap: wrap;
         li{
            width: 48%;
            height: 80px;
            background: #EEEEEE;
            margin-bottom: 18px;
            display:flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            div:first-child {
               color: #666666;
               font-size: 16px;
               line-height: 16px;
               padding-top: 8px;
            }
            div:last-child{
               span {
                  color: #999999;
                  font-size: 14px;
                  line-height: 22px;
                  padding-right: 8px;
               }
            }
         }
         li:nth-child(even) {
            margin-left: 4%;
         }
      }
   }
   >.cont-rt{
      margin-left: 40px;
      width: 450px;
      h2 {
         span{
            width: 130px;
         }
      }
      ul {
         margin-top: 20px;
         color: #666666;
         li {
            width: 216px;
            height: 40px;
            line-height: 40px;
            text-align: center;
            background: #EEEEEE;
            margin-bottom: 20px;
         }
         li:nth-child(odd) {
            margin-right: 18px;
         }
      }
   }
`

export {
   SideBar,
   Div2
}