import React from 'react';
import{
    Container,
    TitleWraper
} from './StyledRank'

//左侧二级导航
import { Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';


//页面组件
import List1 from './List1'
import List2 from './List2'
import List3 from './List3'

const RankUi = () => {
    // const { Sider } = Layout;
    return (
        <Container>
             <main className = 'container'>
                <TitleWraper
                    width="0 0 1px 0"
                >
                <span>热门排行</span>
                </TitleWraper>
            <div className='box'>
                <Menu 
                theme="light" 
                mode="inline"
                width='253'
                defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<UserOutlined />}>
                    作品榜
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                    阅读榜
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined />}>
                    推荐榜
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined />}>
                    完结榜
                    </Menu.Item>
                </Menu>
                <div className='list'>
                    <List1></List1>
                    <List2></List2>
                    <List3></List3>
                </div>
            </div>
            </main>

        </Container>
    );
};

export default RankUi;