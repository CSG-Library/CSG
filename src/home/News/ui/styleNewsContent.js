import styled from 'styled-components'

const NewsContent =styled.div`
    width:1200px;
    display:flex;
    flex-direction:column;
    background-color:#f7fcff;
    >h2{
        width: 118px;
        font-size: 18px;
        font-family: Microsoft YaHei;
        font-weight: 400;
        padding:0 9px 15px;
        color: #319DF7;
        margin-top:43px;
        border-bottom:2px solid #319DF7;
        z-index:2;

        }
        .line{
        border-bottom:1px solid #EEEEEE;
        margin-top:-1px;
        }
        >div{
            padding-bottom:70px;

            display:flex;
            flex-direction:column;

            h2{
                margin-top:40px;
                text-align:center;
                height: 25px;
                font-size: 24px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #666666;
            }
            .ins{
                display: flex;
                align-items:center;
                padding-left:314px;
                height: 17px;
                font-size: 16px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                color: #666666;
                margin-top:23px;
                margin-bottom:20px;
                li{
                    margin-right:58px;
                }
            }
            .ul{
                display:flex;
                flex-direction:column;
                justify-content:center;
                width: 1200px;
                font-size: 16px;
                font-weight: 400;
                color: #666666;
                line-height: 29px;
               
                p{
                    text-indent:2em;
                }
                .li{
                    text-align:center;
                    display:flex;
                    align-items:center;
                    flex-direction:column;
                    img{
                        width: 1024px;
                        height: 510px;
                        display:block;
                        margin-top:20px;
                    }
                    span{
                        display:inline-block;
                        margin:30px auto;
                    }
                }
                

            }


            
        }

`


export {
    NewsContent
}