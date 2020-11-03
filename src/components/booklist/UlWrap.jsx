import React,{ useCallback } from 'react';
import search from '@a/imgs/search.png';

import { Ul, PageWrap } from './styleUl';
import { withRouter } from 'react-router-dom';

const UlWrap = (props) => {
   const handleClick = useCallback(() => {
      return () => {
         console.log(props)
         props.history.push('/home/comment')
      }
   })

   return (
      <Ul>
         <li>
            <div><img src={`${search}`} width='124' height='180' alt="" /></div>
            <div>
               <h2>
                  <span>考试周刊</span>
                  <button>阅读</button>
               </h2>
               <h3>作者/出版年月/出版社/装帧/译者名字</h3>
               <PageWrap lc={3}>
                  <span>简介</span>：穿越而来，她自带防毒雷达。哔哔——啥？姨该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是德国，
                  外加蛇蝎庶妹哔哔——呀！包办婚姻，老公还看不上该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是古风 车
                  系，凭她超高智商穿越而来，她自带防毒雷达。哔哔——啥？姨该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是德国，
                  外加蛇蝎庶妹哔哔——呀
               </PageWrap>
               <h4>
                  <div onClick={handleClick()}>
                     <i className='iconfont'>&#xe637;</i>
                     <span>写书评</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe60f;</i>
                     <span>加入书架</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe600;</i>
                     <span>推荐</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe610;</i>
                     <span>购买</span>
                  </div>
               </h4>
            </div>
         </li>
         <li>
            <div><img src={`${search}`} width='124' height='180' alt="" /></div>
            <div>
               <h2>
                  <span>秀</span>
                  <button>阅读</button>
               </h2>
               <h3>作者/出版年月/出版社/装帧/译者名字</h3>
               <PageWrap lc={3}>
                  <span>简介</span>：穿越而来，她自带防毒雷达。哔哔——啥？姨该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是德国，
                  外加蛇蝎庶妹哔哔——呀！包办婚姻，老公还看不上该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是古风 车
                  系，凭她超高智商穿越而来，她自带防毒雷达。哔哔——啥？姨该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是德国，
                  外加蛇蝎庶妹哔哔——呀
               </PageWrap>
               <h4>
                  <div>
                     <i className='iconfont'>&#xe637;</i>
                     <span>写书评</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe60f;</i>
                     <span>加入书架</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe600;</i>
                     <span>推荐</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe610;</i>
                     <span>购买</span>
                  </div>
               </h4>
            </div>
         </li>
         <li>
            <div><img src={`${search}`} width='124' height='180' alt="" /></div>
            <div>
               <h2>
                  <span>走进来</span>
                  <button>阅读</button>
               </h2>
               <h3>作者/出版年月/出版社/装帧/译者名字</h3>
               <PageWrap lc={3}>
                  <span>简介</span>：穿越而来，她自带防毒雷达。哔哔——啥？姨该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是德国，
                  外加蛇蝎庶妹哔哔——呀！包办婚姻，老公还看不上该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是古风 车
                  系，凭她超高智商穿越而来，她自带防毒雷达。哔哔——啥？姨该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是德国，
                  外加蛇蝎庶妹哔哔——呀
               </PageWrap>
               <h4>
                  <div>
                     <i className='iconfont'>&#xe637;</i>
                     <span>写书评</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe60f;</i>
                     <span>加入书架</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe600;</i>
                     <span>推荐</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe610;</i>
                     <span>购买</span>
                  </div>
               </h4>
            </div>
         </li>
         <li>
            <div><img src={`${search}`} width='124' height='180' alt="" /></div>
            <div>
               <h2>
                  <span>艰辛之路</span>
                  <button>阅读</button>
               </h2>
               <h3>作者/出版年月/出版社/装帧/译者名字</h3>
               <PageWrap lc={3}>
                  <span>简介</span>：穿越而来，她自带防毒雷达。哔哔——啥？姨该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是德国，
                  外加蛇蝎庶妹哔哔——呀！包办婚姻，老公还看不上该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是古风 车
                  系，凭她超高智商穿越而来，她自带防毒雷达。哔哔——啥？姨该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是德国，
                  外加蛇蝎庶妹哔哔——呀
               </PageWrap>
               <h4>
                  <div>
                     <i className='iconfont'>&#xe637;</i>
                     <span>写书评</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe60f;</i>
                     <span>加入书架</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe600;</i>
                     <span>推荐</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe610;</i>
                     <span>购买</span>
                  </div>
               </h4>
            </div>
         </li>
         <li>
            <div><img src={`${search}`} width='124' height='180' alt="" /></div>
            <div>
               <h2>
                  <span>自由</span>
                  <button>阅读</button>
               </h2>
               <h3>作者/出版年月/出版社/装帧/译者名字</h3>
               <PageWrap lc={3}>
                  <span>简介</span>：穿越而来，她自带防毒雷达。哔哔——啥？姨该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是德国，
                  外加蛇蝎庶妹哔哔——呀！包办婚姻，老公还看不上该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是古风 车
                  系，凭她超高智商穿越而来，她自带防毒雷达。哔哔——啥？姨该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是德国，
                  外加蛇蝎庶妹哔哔——呀
               </PageWrap>
               <h4>
                  <div>
                     <i className='iconfont'>&#xe637;</i>
                     <span>写书评</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe60f;</i>
                     <span>加入书架</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe600;</i>
                     <span>推荐</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe610;</i>
                     <span>购买</span>
                  </div>
               </h4>
            </div>
         </li>
         <li>
            <div><img src={`${search}`} width='124' height='180' alt="" /></div>
            <div>
               <h2>
                  <span>模特之路</span>
                  <button>阅读</button>
               </h2>
               <h3>作者/出版年月/出版社/装帧/译者名字</h3>
               <PageWrap lc={3}>
                  <span>简介</span>：穿越而来，她自带防毒雷达。哔哔——啥？姨该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是德国，
                  外加蛇蝎庶妹哔哔——呀！包办婚姻，老公还看不上该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是古风 车
                  系，凭她超高智商穿越而来，她自带防毒雷达。哔哔——啥？姨该放就放国家更符合法规和法国和法国共和国法国和，更符合法规和，的合法建设的放开将，数据库的方块是德国，
                  外加蛇蝎庶妹哔哔——呀
               </PageWrap>
               <h4>
                  <div>
                     <i className='iconfont'>&#xe637;</i>
                     <span>写书评</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe60f;</i>
                     <span>加入书架</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe600;</i>
                     <span>推荐</span>
                  </div>
                  <div>
                     <i className='iconfont'>&#xe610;</i>
                     <span>购买</span>
                  </div>
               </h4>
            </div>
         </li>
      </Ul>
   )
}

export default withRouter(UlWrap)