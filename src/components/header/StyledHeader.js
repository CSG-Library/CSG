import styled from 'styled-components'

const HeaderWraper = styled.div`
    width:100%;
    height:30px;
    background: #F5F5F5;
    .container{
        /* background: #f99; */
        height: 30px;
        color:#999;
        section{
            span{
                display:inline-block;
                height: 30px;
                font-size: 18px;
                line-height:30px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                &:nth-child(1){
                    margin-right:11px;
                };
                &:nth-child(3){
                    margin-left:11px;
                }
            }
            i{
                display:inline-block;
                width:1px;
                line-height:30px;
                height: 16px;
            }
        }
    }

`
export {
    HeaderWraper
}