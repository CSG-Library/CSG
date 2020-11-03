import styled from 'styled-components'

const MainNavWraper = styled.div`
    height: 95px;
    padding-top: 10px;
    /* background-color:green; */
    .l{
        width: 297px;
        height: 85px;    
        margin-left: -76px;
        
    }
    ul{
        float:left;
        width: 811px;
        height: 47px;
        line-height: 47px;
        margin-top: 32px;
        margin-left: -54px;
        font-size: 18px;
        color: #fff;
        background: #319DF7;
        display: flex;
        text-align: center;
        li{
            flex: 1; 
            cursor: pointer;
            &.active {
                background: #087AD9;
                border-bottom: 2px solid #FBCF00;
                cursor: pointer;
            }
        }
        
        
    }
    div:last-child{
        float: right;
        margin-top: 32px;
        display: flex;
        input {
            width: 160px;
            height: 47px;
            border: 1px solid #CCCCCC;
            border-right:1px solid #fff;
            background-color:#fff;
            text-indent:5px;
        }
        span{
            width: 46px;
            height: 46px;
            background: #68B9FC;
            border: 1px solid #319DF7;
            border-left: 1px solid  #68B9FC;
            line-height: 56px;
            cursor: pointer;
            svg{
                width: 1.5em;
                height: 1.5em;
                color: #fff;
            }
        }
    }    
        
    
`
export {
    MainNavWraper
}