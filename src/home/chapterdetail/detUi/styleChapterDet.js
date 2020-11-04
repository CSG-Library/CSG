import styled from 'styled-components';
import border from '@a/styled/border';

const Div2 = styled.div`
   width: 100%;
   padding-top: 36px;
   display: flex;
   justify-content: space-between;
`

const AsideWrap = styled.aside`
   width: 140px;
   button {
      display: flex;
      width: 50px;
      justify-content: space-between;
      background: #fff;
      margin-left: 10px;
      b {
         display: inline-block;
         width: 8px;
         height: 16px;
         font-weight: 900;
         color: #319DF7;
      }
      em {
         display: inline-block;
         font-size: 16px;
         line-height: 16px;
      }
   }
   div {
      font-size: 16px;
      color: #666666;
      h2 {
         text-align: center;
         line-height: 76px;
      }
      img {
         width: 100%auto;
      }
      h3 {
         line-height: 16px;
         margin-top: 30px;
      }
      h4 {
         line-height: 42px;
      }
      h5 {
         line-height: 16px;
      }
   }
   section {
      margin-top: 30px;
      height: 72px;
      display: flex;
      h6 {
         margin: auto;
         display: flex;
         width: 100%;
         height: 38px;
         background: #319DF7;
         color: #fff;
         span{
            margin: auto;
         }
      }
   }
`
const SecWrap = border(styled.section``)

const ChapterWrap = styled.div`
   width: 100%;
   margin: 0 40px;
   h2{
      width: 100%;
      font-size: 18px;
      color: #319DF7;
      line-height: 22px;
      span {
         width: 90px;
         display: inline-block;
         text-align: center;
         border-bottom: 2px solid #319DF7;
      }
   }
   ul{
      margin-top: 20px;
      display: grid;
      grid-template-columns: repeat(5, 20%);
      font-size: 14px;
      color: #666666;
      line-height: 32px;
   }

`
const Title = border(styled.h2``)

const MoreWrap = styled.div`
   width: 140px;
   dl {
      width: 100%;
      margin-bottom: 16px;
      dt {
         width: 100%;
      }
      dd {
         text-align: center;
         margin-top: 20px;
      }
   }
   dl:nth-child(3) {
      margin-bottom: 16px;
   }
   >div {
      width: 120px;
      margin: auto;
      border: 1px solid #319DF7;
      font-size: 14px;
      color: #319DF7;
      text-align: center;
   }
`

export {
   Div2,
   AsideWrap,
   SecWrap,
   ChapterWrap,
   Title,
   MoreWrap
}