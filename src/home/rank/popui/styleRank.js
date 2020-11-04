import styled from 'styled-components';
import border from '@a/styled/border';

const Title = border(
   styled.h2`
      width: 100%;
      font-size: 18px;
      color: #319DF7;
      line-height: 50px;
      span {
         width: 90px;
         display: inline-block;
         text-align: center;
         border-bottom: 2px solid #319DF7;
      }
   `
)

const Div2 = styled.div`
   width: 100%;
   padding-top: 50px;
   display: flex;
   justify-content: space-between;
`

const AsideWrap = styled.aside`
   width: 266px;
   >dl {
      background: #EEEEEE;
      color: #666666;
      margin-bottom: 60px;
      padding: 0 30px 0 15px;
      >dt {
         font-size: 18px;
         line-height: 18px;
         padding-top: 14px;
      }
      dd {
         font-size: 16px; 
         line-height: 40px;
         display: flex;
         justify-content: space-between;
      }
      >.dd_btn {
         justify-content: center;
         color: #319DF7;
      }
   }
`

const RankWrap = styled.div`
   width: 890px;
   h5 {
      background: #319DF7;
      height: 40px;
      span {
         line-height: 40px;
         color: #FFFFFF;
         font-size: 16px;
         &:first-child {
            padding-left: 15px;
         }
         &:last-child {
            padding-left: 72px;
         }
      }
   }
`

export {
   Title,
   Div2,
   AsideWrap,
   RankWrap
}