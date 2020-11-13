import React, { Component } from 'react'

import { SearchUi } from './styleSearchUi'
import { DatePicker, Space } from 'antd';
import { withRouter } from 'react-router-dom';

import { actionCreator as ac } from '../';
import { connect } from 'react-redux';

@withRouter
@connect(
   state => ({
      renderData: state.getIn(['rankSeaArticle', 'renderData'])
   }),
   dispatch => ({
      loadData(){
         dispatch(ac.GetAsyncAction())
      }
   })
)
class PreciseSearchUi extends Component {
   state = {
      searchName: '',
      searchResult: '',
      content: -1,
      name: '',
      author: '',
      publisher: '',
      publicationData: true,
      stime: '',
      etime: ''
   }
   handelChange(e) {
      if (e.target.name === 'name') {
         this.setState({
            name: e.target.value
         })
      } else if (e.target.name === 'one' | 'two' | 'three' | 'four') {
         this.setState({
            searchResult: e.target.value,
            searchName: e.target.name
         })
      } else if (e.target.name === 'author') {
         this.setState({
            author: e.target.value,
         })
      } else if (e.target.name === 'publisher') {
         this.setState({
            publisher: e.target.value,
         })
      }
      console.log(this.state.name);

   }
   click(i) {
      return () => {
         this.setState({
            content: i,
         })
      }
   }
   change(e) {
      if (e.target.id === 'arbitrarily') {
         this.setState({
            publicationData: true
         })
      } else {
         this.setState({
            publicationData: false
         })
      }

   }
   handelChangeTime(e) {
      const stime = e[0]._d.getTime();
      const etime = e[1]._d.getTime();

      this.setState({
         stime,
         etime
      })
   }

   componentDidUpdate(){
      this.props.loadData()
   }

   handleClick = (content) => {
      return () => {
         if(content === -1) {
            this.props.history.push("/home/searchres")
         } else if(content === 0) {
            this.props.history.push("/home/searchres", { 
               arr: this.props.renderData.rank_data,
               limit: 6 
            })
         } else {
            this.props.history.push("/home/searchres", { 
               arr: this.props.renderData.rank_data.filter(v => v.cate_type === content),
               limit: 6 
            })
         }
      }
   }

   render() {
      const { RangePicker } = DatePicker;
      const img = require('@a/imgs/dui3.png')
      return (
         <>

            <SearchUi>
               <h2>精确搜索</h2>
               <p className='line'></p>
               <ul className="ul">
                  <li className='searchResult'>
                     <em>搜索结果</em>
                     <div>
                        <div ><span>包含全部字词</span><input type="text" name="one" onChange={this.handelChange.bind(this)} value={this.state.searchName === 'one' ? this.state.searchResult : ''} placeholder='文学经典' /></div>
                        <div ><span>包含完整字句</span><input type="text" name="two" onChange={this.handelChange.bind(this)} value={this.state.searchName === 'two' ? this.state.searchResult : ''} /></div>
                        <div ><span>包含至少一个字词</span><input type="text" name="three" onChange={this.handelChange.bind(this)} value={this.state.searchName === 'three' ? this.state.searchResult : ''} /></div>
                        <div ><span>不包含字词</span><input type="text" name="four" onChange={this.handelChange.bind(this)} value={this.state.searchName === 'four' ? this.state.searchResult : ''} /></div>
                     </div>

                  </li>
                  <li className='content'>
                     <em>内容</em>
                     <div>
                        <div onClick={this.click(0)}>
                           <span id="all" value="0" className={this.state.content === 0 ? 'active' : ''}>
                              <img src={img} alt="" />  </span> <label htmlFor="all">全部书籍</label>
                        </div>
                        <div onClick={this.click('印刷出版')}> 
                           <span id="printing" value="1" className={this.state.content === '印刷出版' ? 'active' : ''}>
                              <img src={img} alt="" /> </span><label htmlFor="printing">印刷出版</label>
                        </div>
                        <div onClick={this.click('电子出版')}> 
                           <span id="electronics" value="2" className={this.state.content === '电子出版' ? 'active' : ''}>
                              <img src={img} alt="" /> </span><label htmlFor="electronics">电子出版</label>
                        </div>
                        <div onClick={this.click('杂志')}> 
                           <span id="magazine" value="3" className={this.state.content === '杂志' ? 'active' : ''}>
                              <img src={img} alt="" /> </span><label htmlFor="magazine">杂志</label>
                        </div>
                        <div onClick={this.click('报刊')}> 
                           <span id="newspapers" value="4" className={this.state.content === '报刊' ? 'active' : ''}>
                              <img src={img} alt="" /> </span><label htmlFor="newspapers">报刊</label>
                        </div>

                     </div>
                  </li>
                  <li className='name'>
                     <em>名称</em>
                     <div><span>返回具有以下标题图书</span><input onChange={this.handelChange.bind(this)} name='name' value={this.state.name} type="text" placeholder='例如：文学' /></div>

                  </li>
                  <li className='author'>
                     <em>作者</em>
                     <div><span>返回具有以下作者撰写的图书</span><input onChange={this.handelChange.bind(this)} name='author' value={this.state.author} type="text" placeholder='例如：罗贯中' /></div>

                  </li>
                  <li className='publisher'>
                     <em>出版商</em>
                     <div><span>返回具有以下出版商出版的图书</span><input onChange={this.handelChange.bind(this)} name='publisher' value={this.state.publisher} type="text" placeholder='例如：清华大学出版社' /></div>

                  </li>
                  <li className='publicationData'>
                     <em>出版日期</em>
                     <div className='right'>
                        <div className='two'>
                           <div onChange={this.change.bind(this)}><input type="radio" name="time" id="arbitrarily" /><label htmlFor="arbitrarily">返回任意时间出版的内容</label></div>
                           <div onChange={this.change.bind(this)}><input type="radio" name="time" id="select" /><label htmlFor="select">返回以下时间出版的内容</label> </div>
                        </div>
                        <Space className='three' direction="vertical" size={12} >
                           <RangePicker picker="year" disabled={this.state.publicationData} size={"middle"} onChange={this.handelChangeTime.bind(this)} />
                        </Space>
                     </div>
                  </li>
                  <li className='search'><button onClick={this.handleClick(this.state.content)}>查询</button> </li>
               </ul>
            </SearchUi>
         </>
      )
   }

}



export default PreciseSearchUi