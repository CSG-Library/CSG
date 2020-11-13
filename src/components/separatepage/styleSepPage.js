import styled from 'styled-components';

const Sepwrap = styled.div`
      display: flex;
      justify-content: center;
      height: 80px;
      margin: 30px auto;
      p, ul, select{
         height: 32px;
      }
      p{
         padding: 5px;
         margin: 0 5px;
         border: 1px solid #333;
         cursor: pointer;
      }
      ul {
         display: flex;
         justify-content: center;
         align-items: center;
         li {
            width: 32px;
            padding: 5px;
            margin: 0 5px;
            text-align: center;
            border: 1px solid #333;
            cursor: pointer;
            &.active{
               background: #319DF7;
               color: #fff
            }
         }
      }
      select {
         width: 80px;
         border: 1px solid #333;
         font-size: 14px;
         margin-left: 20px;
      }
`

export {
   Sepwrap
}

