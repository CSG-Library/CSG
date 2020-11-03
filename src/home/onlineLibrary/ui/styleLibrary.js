import styled from 'styled-components'

const LibraryContent = styled.div `
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
        display:flex;
        justify-content:space-between;
        color: #666666;

        .left{
            h2{
                width: 72px;
                height: 18px;
                font-size: 18px;
                font-family: Microsoft YaHei;
                font-weight: 400;
                margin-top:50px;
                margin-bottom:24px;
            }
            ul{
                display:flex;
                flex-direction:column;
                li{
                    width: 667px;
                    font-size: 16px;
                    font-weight: 400;
                    color: #666666;
                    margin-bottom:47px;
                    line-height:24px;
                    h3{
                        font-size:16px;
                        line-height:24px;
                    }
                    p{
                        font-size:14px;
                    }
                    

                }
            }

        }
        .right{
            text-align:center;
            img{
                width: 438px;
                height: 325px;
                background: #FF9B32;
                margin-top:122px;
            }
            p{
                margin-top:31px;
                height: 17px;
                font-size: 18px;
                font-weight: 400;
                color: #319DF7;

            }
        }
    }
`


export {
    LibraryContent
}