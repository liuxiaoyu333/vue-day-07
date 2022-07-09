import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import shouye from '@/views/shouye';
import fenlei from '@/views/fenlei';
import dingdan from '@/views/dingdan';
import wode from '@/views/wode';
import xinwen from '@/views/Second/xinwen';
import fangjia from '@/views/Second/third/fnagjia';
// import Find from '@/views/Find';
// import My from '@/views/My';
// import Part from '@/views/Part';
// import NotFound from '@/views/NotFound';
// import Recommend from '@/views/Second/Recommend';
// import Ranking from '@/views/Second/Ranking';
// import SongList from '@/views/Second/SongList';
Vue.config.productionTip = false;
Vue.use(VueRouter);
const routes = [
  {
    path: '/',
    redirect: '/shouye',
  },
  {
    path: '/shouye',
    component: shouye,
    children: [
      {
        path: 'xinwen',
        component: xinwen,
        children: [
          {
            path: 'fangjia',
            component: fangjia,
          },
        ],
      },
    ],
  },
  {
    path: '/fenlei',
    component: fenlei,
  },
  {
    path: '/dingdan',
    component: dingdan,
  },
  {
    path: '/wode',
    component: wode,
  },
];
// const routes = [
//   {
//     path: '/', // 默认hash值路径
//     redirect: '/find', // 重定向到/find
//     // 浏览器url中#后的路径被改变成/find-重新匹配数组规则
//   },
//   {
//     path: '/find',
//     name: 'Find',
//     component: Find,
//     children: [
//       {
//         path: 'recommend',
//         component: Recommend,
//       },
//       {
//         path: 'ranking',
//         component: Ranking,
//       },
//       {
//         path: 'songlist',
//         component: SongList,
//       },
//     ],
//   },
//   {
//     path: '/my',
//     name: 'My',
//     component: My,
//   },
//   // {
//   //   path: '/part',
//   //   component: Part,
//   // },
//   {
//     path: '/part/:username', // 有:的路径代表要接收具体的值
//     name: 'Part',
//     component: Part,
//   },
//   {
//     path: '*',
//     component: NotFound,
//   },
// ];
const router = new VueRouter({
  routes,
  // mode: "history" // 打包上线后需要后台支持, 模式是hash
});
// const isLogin = true;
// router.beforeEach((to, from, next) => {
//   if (to.path === '/my' && isLogin === false) {
//     alert('请登录');
//     next(false);
//   } else {
//     next();
//   }
// });
new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
