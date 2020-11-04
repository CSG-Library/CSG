import styled from 'styled-components';
import border from '@a/styled/border';

const PageWrap = styled.div`
   display: flex;
   width: 840px;
   >div {
      &:first-child, &:last-child {
         background: #EEEEEE;
         width: 80px;
      }
      &:first-child {
         text-align: right;
         span {
            display: block;
            width: 16px;
            margin: 66px 0 0 47px;
         }
         i {
            display: inline-block;
            transform-origin: left top;
            transform: rotate(90deg) scale(0.6);
            color: #319DF7;
            margin-top: 6px;
         }
      }
      &:nth-child(2) {
         margin: 0 40px;
         width: 640px;
         p {
            font-size: 16px;
            line-height: 28px;
            color: #666666;
            text-indent: 2em;
            &:first-of-type {
               margin-top: 18px;
            }
            &:last-of-type {
               margin-bottom: 18px;
            }
         }
      }
   }
`
const H6Wrap = border(
   styled.h6`
      font-size: 18px;
      line-height: 48px;
      color: #666666;
   `
)

export {
   PageWrap,
   H6Wrap
}