import React, { Component } from 'react';
import DialogWrapper from './StyleDialog'

//判断长度的函数
function countLength(str) {
    var inputLength = 0;
    //给一个变量来记录长度
    for (var i = 0; i < str.length; i++) {
      var countCode = str.charCodeAt(i);
      //   console.log("countCode打印：", countCode);
      //返回指定位置的字符的Unicode编码
      //判断是不是ASCII码,Unicode码前128个字符是ASCII码
      if (countCode >= 0 && countCode <= 128) {
        inputLength++;
      } else {
        inputLength += 2;
        //如果是扩展码，则一次+2
      }
    }
    return inputLength;
  }

class Dialog extends Component {
   state ={
       value:'',
       timestamp:'',
       title:''
   }
    debounce = (fn, wait) => {
        var timeout = null;
        return function (e) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                fn.apply(this, arguments);
            }, wait);
        };
    }
    /* handleChange = ()=>{
        
        this.debounce((e)=>{
            console.log(e.target.value)
            this.setState({
                value:e.target.value
            })
        },1000)
    } */
    handleChangeContent = ()=>{
        return (e)=>{
            // console.log(e.target.value)
            this.setState({
                value:e.target.value
            })
        }

    }

    handleChangeTitle=()=>{
        return (e)=>{
            // console.log(e.target.value)
            this.setState({
                title:e.target.value
            })
        }
    }
    handleClick=()=>{
        // console.log(this.state.value)
        return ()=>{
            // this.props.onReceiveKeywords(this.state.value)
            // this.props.onDeleteClick(this.state.value)
            // console.log(9)
            this.setState(
                { timestamp: new Date().toLocaleString('zh', { hour12: false }) },
            ()=>{
                // 判断输入内容是否为空
                if(typeof this.state.value == "undefined" || this.state.value == null || this.state.value == ""||this.state.title == "undefined" || this.state.title == null || this.state.title == ""){
                    return alert('欧巴，看看是不是少写了啥O(∩_∩)O')
                }
                //判断字数是否超出
                else if(countLength(this.state.value)>280){
                    return alert('欧巴，超过140个字了哟')
                } 
                //正常返回
                else{
                    // return false,
                    return   this.props.onReceiveKeywords((this.state.title),(this.state.value),(this.state.timestamp))
                }
            }
            )        
        }
    }
    render() {
       
        return (
        <DialogWrapper className='protal'>
            <div className='box'>
                <div className="first">彦祖，说两句嘛</div>
                {/* <p>
                    <label htmlFor="title">昵称</label>
                    <input type="text" id='title'/>
                </p> */}
                <p className='second'>
                    <label 
                    htmlFor="titleContent"
                    className='titleContent'
                    >
                        短评标题
                    </label> 
                    <input type="text" className='titleComments' 
                    placeholder="&nbsp;&nbsp;快来起个标题吧"
                    onChange={this.handleChangeTitle()}
                    />

                </p>
                <p className='third'>
                    <label 
                    htmlFor="content" 
                    className='content'
                    >
                        短评内容（{`<`}140）
                    </label>
                    
                    <textarea 
                    className='comments'
                    id='content'
                    placeholder="&nbsp;&nbsp;快来整两句儿吧！"
                    onChange={this.handleChangeContent()}
                    >
                    </textarea>
                </p>
                <div className='btn'> 
                    <button 
                    className='publish'
                    // onClick={this.props.onReceiveKeywords(this.state.value)}
                    onClick={this.handleClick()}
                    // onClick={this.props.onDeleteClick}
                    >发布</button>

                    <button 
                    className='cancel'
                    onClick={this.props.onDeleteClick}
                    >关闭</button>
                </div>
            </div>
            
        </DialogWrapper>
        );
    }
}

export default Dialog;