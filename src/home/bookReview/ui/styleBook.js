import styled from 'styled-components'

const BookReview = styled.div`
    display:flex;
    flex-direction:column;
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
    .top{
        width:100%;
        margin-top:50px;
        min-height:900px;
        display:flex;
        justify-content:space-between;
        .left{
            width:940px;
            height:900px;
            display:flex;
            flex-direction:column;
            .lTop{
                display:flex;
                >li{
                    display:flex;
                    flex-direction:column;
                    >img{
                        width: 104px;
                        height: 104px;
                    }
                    >span{
                        width: 104px;
                        font-size: 16px;
                        font-weight: 400;
                        color: #666666;
                        text-align:center;
                        margin-top:16px;    

                    }
                }
                .midd{
                    margin-left:30px;
                    width:620px;
                    justify-content:center;
                    >div{
                        font-size: 16px;
                        line-height:16px;
                        font-weight: 400;
                        color: #666666;
                        display:flex;
                        align-items:center;
                    }
                    >div:first-child{
                        margin-bottom:23px;
                    }
                    >div:last-child{
                        display:flex;
                        flex-direction:row; 
                    }
                }
                >li:last-child{
                   display:flex;
                   flex-direction:column;
                   justify-content:flex-end;
                   
                   p{
                    width: 180px;
                    font-size: 24px;
                    font-weight: 400;
                    color: #666666;

                   }

                }
            }
            .lBtm{
                margin:24px auto 0;
                width: 938px;
                height: 721px;
                border: 1px solid #EEEEEE;
                text-indent:2em;
                line-height:34px;
                font-size:16px;
                color:#666;
            }
        }
        .right{
            width:195px;
            height:900px;
            display:flex;
            flex-direction:column;
            font-size: 16px;
            font-weight: 400;
            color: #666666;

            ul{
                li{
                    line-height:16px;
                    font-size: 16px;
                    font-weight: 400;
                    color: #666666;
                    display:flex;
                }
                li:nth-child(1){
                    width:100%;
                    justify-content:flex-end;

                    img{
                        width: 178px;
                        height: 262px;
                    }
                }
                li:nth-child(2){
                    justify-content:center;
                    margin:26px auto 40px;
                    button{
                        width: 80px;
                        height: 33px;
                        background: #319DF7;
                        padding:8px 24px;
                        font-size: 16px;
                        font-weight: 400;
                        color: #FFFFFF;
                        cursor: pointer;


                    }
                }
                li:nth-child(n+3){
                    height:30px;
                    line-height: 17px;
                    font-size: 16px;
                    font-weight: 400;
                    color: #666666;
                    border:none;
                }
            }
            h2{
                margin-top:60px;
                height:36px;
                line-height:36px;
                
            }
            p{
                height:36px;
                line-height:36px;    
            }


        }
    }
    .mid{
        margin-top:40px;
        display:flex;
        flex-direction:column;

        .ul{
            li{
               p:first-child{
                height: 17px;
                font-size: 16px;
                font-weight: 400;
                color: #666666;
                margin-bottom:30px;
               } 
               div{
                    margin: 0 0 30px;
                    width: 1197px;
                    background: #EEEEEE;
                    padding:9px;
                    line-height:14px;
                    >span{
                        
                        font-size: 14px;
                        font-weight: 400;
                        color: #666666;
                        margin-left:43px;
                        &:nth-child(1){
                            margin-left:0;

                        }

                    }

               }
               p:last-child{
                   margin-bottom:38px;
               }
            }
        }
        .ant-pagination{
            display:flex;
            flex-direction:row;
            justify-content:center;
            margin-bottom:45px;
        }
    }
    .btm{
        margin-top:45px;
        min-height:230px;
        p{
            font-size: 16px;
            font-weight: 400;
            color: #666666;
            margin-bottom:30px;
        }
        textarea{
            width: 1200px;
            height: 115px;
            border: 1px solid #EEEEEE;
            margin-bottom:30px;

        }
        div{
            height: 40px;
            display:flex;
            button{
                width: 112px;
                height: 40px;
                cursor: pointer;
            }
            button:first-child{
                background: #319DF7;
                color:#FFFFFF;
            }
            button:last-child{
                background: #f2f2f2;
                font-size: 18px;
                font-weight: 400;
                color: #666666;
                margin-left:50px;

            }

        }
    }
`

export{
    BookReview
}