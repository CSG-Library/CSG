import styled from 'styled-components'

const Container = styled.div`
    width:100%;
    .container{
        .content{
            width:inherit;
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            margin-top:50px;
            margin-bottom:50px;
            p:nth-child(1){
                line-height:24px;
                font-size: 24px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #666666;
            }
            p:nth-child(2){
                line-height:24px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #666666;
            }
            div:last-child{
                width:100%;
                p{
                    margin-top:10px;
                    line-height:45px;
                    font-size: 16px;
                    font-family: Microsoft YaHei;
                    font-weight: 400;
                    color: #666666;
                }
                img{
                    display:block;
                    margin:10px auto 20px;
                }
            }
        }
    }


`

export {
    Container 
}