import React, { Component } from 'react';

import { Footer } from '@c/styleComp';

export default class App extends Component {
   render() {
      return (
         <Footer style={{ textAlign: 'center' }}>
            <div>关于读书 免责声明 读书目录 联系我们</div>
            <p>Copyright © 藏书阁 www.csga.com 2006-2016, All Rights Reserved. 鄂ICP备15019699号-2</p>
         </Footer>
      )
   }
}


