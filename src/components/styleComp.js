import styled from 'styled-components';

const Header = styled.header`
   width: 100%;
   color: #999999;
   height: 30px;
   background: #F5F5F5;
   >div {
      height: inherit;
   }
   span {
      line-height: 30px;
      font-size: 14px;
      font-family: Microsoft YaHei;
      font-weight: 400;
   }
   i {
      display: inline-block;
      width: 1px;
      height: 18px;
   }
   span:first-child {
      margin-right: 5px
   }
   span:last-child {
      margin-left: 6px
   }
`

const Footer = styled.footer`
   height: 120px;
   color: rgb(153,153,153);
   background: rgb(250,250,250);
   border-top: 1px solid rgb(221,221,221);
   font-size: 12px;
   line-height: 12px;
   >div{
      margin-top: 40px;
   }
   >p{
      margin: 18px 0 38px 0;
   }
`

const Nav = styled.nav`
   height: 95px;
   img {
      margin-top: 10px;
      margin-left: -76px;
   }
   ul {
      float: left;
      width: 811px;
      height: 47px;
      line-height: 47px;
      margin-top: 42px;
      margin-left: 18px;
      font-size: 18px;
      color: #fff;
      background: #319DF7;
      display: flex;
      text-align: center;
      >li{
         flex: 1;
      }
      li:first-child {
         background: #087AD9;
         border-bottom: 2px solid #FBCF00;
      }
   }
   >div:last-child{
      float: right;
      margin-top: 42px;
      display: flex;
   }
   input {
      width: 160px;
      height: 47px;
      border: 1px solid #CCCCCC;
      text-indent: 20px;
   }
   span{
      width: 46px;
      height: 46px;
      background: #68B9FC;
      border: 1px solid #319DF7;
      line-height: 56px;
      svg{
         width: 1.5em;
         height: 1.5em;
         color: #fff;
      }
   }
`

const Ul = styled.ul`
   margin: 20px 0 0 160px;
   display: flex;
   font-size: 16px;
   text-align: center;
   color: #666666;
   li {
      flex: 1;
      border-right: 1px solid #EAEAEA;
      /* transition: all 1000ms ease-in; */
      &:nth-child(7),:nth-child(8),:nth-child(9) {
         border:none;
      }
      &.active {
         color: #319DF7;
      }
   }
`

export {
   Header,
   Footer,
   Nav,
   Ul
}
