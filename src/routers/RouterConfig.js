import { Switch, Route, Link, Redirect } from "react-router-dom";

// 一级路由信息
const routes = [
   // 登录
   {
      path:'/login',
      component: Login
   },
   // 注册
   {
      path:'/regsiter',
      component: Regsiter
   },
   // 首页---分类浏览
   {
      path: "/home",
      component: HomeRouter,
      routes: [
         // 二级路由信息
         // 在线图书馆
         {
            path:'/home/browse',
            component: Home,
            routes:[

            ]
         },
         {
            path: "/home/online",
            component: Online,
            routes: [

            ]
         },
         // 电子杂志
         {
            path:'/home/magazine',
            component: MagaCate,
            routes: [
               
            ]
         },
         // 电子报刊
         {
            path:'/home/paper',
            component: PaperCate,
            routes: [

            ]
         },
         // 资料库
         {
            path:'/home/database',
            component: DataBase,
            routes: [

            ]
         },
         // 热门排行
         {
            path:'/home/rank',
            component: Rank,
            routes: [

            ]
         },
         // 精确搜索
         {
            path:'/home/search',
            component: Search,
            routes: [

            ]
         },
         // 我的书架
         {
            path:'/home/bookshelf',
            component: BookShelf,
            routes: [

            ]
         },
         // 我的身份：贡士
         {
            path:'/home/mine',
            component: Mine,
            routes: [

            ]
         }
      ]
   }
]