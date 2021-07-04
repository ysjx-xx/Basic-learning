import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../components/Home";
// import About from "../components/About";
// import User from "../components/User";

//路由懒加载
const Home = () => import("../components/Home");
const HomeNews = () => import("../components/HomeNews");
const HomeMessage = () => import("../components/HomeMessage");
const About = () => import("../components/About");
const User = () => import("../components/User");
const Profile = () => import("../components/Profile");
//用Vue.use安装插件
Vue.use(VueRouter);

//创建VueRouter对象
const routes = [
  //重定向,无后缀直接显示首页
  { path: "", redirect: "/home" },
  {
    path: "/home",
    component: Home,
    meta: {
      title: "首页"
    },
    //路由嵌套
    children: [
      {
        path: "",
        redirect: "news"
      },
      {
        path: "news",
        component: HomeNews
      },
      {
        path: "message",
        component: HomeMessage
      }
    ]
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "关于"
    }
  },
  {
    path: "/user/:userId",
    component: User,
    meta: {
      title: "首页"
    }
  },
  {
    path: "/profile",
    component: Profile
  }
];
const router = new VueRouter({
  routes,
  //默认location.hash,可以改变为history模式
  mode: "history"
});
//前置钩子函数设置标题
router.beforeEach((to, from, next) => {
  // to and from are both route objects. must call `next`.前置钩子必须调用next()
// console.log(to);
  document.title = to.matched[0].meta.title;
  next();
});


const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router
