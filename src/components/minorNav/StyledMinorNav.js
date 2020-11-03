import styled from 'styled-components'

const MinorNavWrap = styled.div`
        margin-top:22px;
        margin-bottom:24px;
        margin-left:186px;
        display:flex;
        
        /* background-color:#d97; */
        li{
            flex:1;
            /* align-items:center;
            justify-content:center; */
            text-align:center;
            height: 16px;
            font-size: 16px;
            line-height:16px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #666666;
            border-right: 1px solid #EAEAEA;
            cursor: pointer;
            /* transition: all 1000ms ease-in; */
            &:nth-child(7),:nth-child(8),:nth-child(9) {
                border:none;
            }
            &.active {
                color: #319DF7;
            }
            /* &:hover {
                color: #319DF7;
            } */
        }

`
export {
    MinorNavWrap
}