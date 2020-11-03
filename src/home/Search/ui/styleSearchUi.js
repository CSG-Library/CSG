import styled from 'styled-components';

const SearchUi = styled.div`
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
    .ul{
        display:flex;
        flex-direction:column;
        margin-top:35px;
        li{
            display:flex;
            font-size: 18px;
            font-weight: 400;
            color: #666666;
            margin-bottom:70px;
            em{
                width: 75px;
                height:48px;
                line-height:48px;
                font-size: 18px;
            }
            >div{
                margin-left:220px;
                width:890px;
                line-height:48px;
                display:flex;
                flex-direction:column;
                >div{
                    width:100%;
                    height:48px;
                    display:flex;
                    justify-content:space-between;
                    input{
                        width: 254px;
                        height: 31px;
                        line-height:31px;
                        padding-left:20px;
                        border: 1px solid #EEEEEE;
                        &::placeholder{
                            font-size: 16px;
                            font-family: Microsoft YaHei;
                            font-weight: 400;
                            color: #999999;
                        }

                    }

                }

            }

        }
        .content{
            >div{
                flex-direction:row;
                justify-content:space-between;
                >div{
                    display:flex;
                    justify-content:space-around;
                    align-items:center;
                    font-size:20px;
                    width:auto;

                    span{
                        cursor: pointer;
                        width:20px;
                        height:20px;
                        border:1px solid #319DF7;
                        position: relative;
                        img{
                            position: absolute;
                            width:16px;
                            height:16px;
                            margin-left:2px;
                            margin-top:1px;
                        }
                        &.active{
                            width:20px;
                            height:20px;
                            background: #319DF7;
                        }
                    }
                    label{
                        font-size:18px;
                        margin:0;
                        padding:0;
                        cursor: pointer;   
                        padding-left:4px;


                    }
                }
            }
        }
        .name,.author,.publisher{
            >div{
                flex-direction:row;
                justify-content:space-between;
                align-items:center;
                input{
                    width: 254px;
                    height: 31px;
                    line-height:31px;
                    padding-left:20px;
                    border: 1px solid #EEEEEE;
                    &::placeholder{
                        font-size: 16px;
                        font-family: Microsoft YaHei;
                        font-weight: 400;
                        color: #999999;
                    }

                    }
            }
        }
        .publicationData{
            .right{
              display:flex;
              flex-direction:row;
              align-items:center;
              .two{
                  width:240px;
                  height:auto;
                  display:flex;
                  flex-direction:column;
                  >div{
                      display:flex;
                      align-items:center;
                      input{
                          width:auto;
                          zoom:140%;
                          margin-right:4px;
                      }
                      flex-direction:row;
                  }
                  
              }
              .three{
                  margin-left:200px;
                  width:400px;
                    .ant-picker-range{
                        width:150px;
                        }
              }
                 
              
          }
        }
        .search{
            justify-content:center;
            align-items:center;
            button{
                border-radius:5px;
                width:100px;
                height:40px;
                line-height:40px;
                background-color:#319DF7;
                color:#fff;
            }
        }
    }
`
export {
    SearchUi
}