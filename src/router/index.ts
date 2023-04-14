import { App } from 'vue';
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
// import { RedirectRoute } from '@/router/base';
import { PageEnum } from '@/enums/pageEnum';
// import { createRouterGuards } from './router-guards';
// import type { IModuleType } from './types';

// const modules = import.meta.glob<IModuleType>('./modules/**/*.ts', { eager: true });

// const routeModuleList: RouteRecordRaw[] = [];

// Object.keys(modules).forEach((key) => {
//   const mod = modules[key].default || {};
//   const modList = Array.isArray(mod) ? [...mod] : [mod];
//   routeModuleList.push(...modList);
// });

// function sortRoute(a, b) {
//   return (a.meta?.sort || 0) - (b.meta?.sort || 0);
// }

// routeModuleList.sort(sortRoute);

export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  redirect: PageEnum.BASE_HOME,
  component: () => import('@/views/dashboard/index.vue'),
  meta: {
    title: 'Root',
  },
};

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'Login',
  component: () => import('@/views/login/index.vue'),
  meta: {
    title: '登录',
  },
};

// //需要验证权限
// export const asyncRoutes = [...routeModuleList];

//普通路由 无需验证权限
export const constantRouter: any[] = [LoginRoute, RootRoute];

const router = createRouter({
  history: createWebHashHistory(''),
  routes: [
    // routes 属性和 vue-router 3 的配置一样，通过数组对象的形式，配置路径对应展示的组件。
    {
      path: '/',
      name: '/',
      component: () => import('@/views/dashboard/index.vue'),
      meta: {
        title: '登录',
      },
    },
  ],
  strict: true,
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export function setupRouter(app: App) {
  app.use(router);
  // 创建路由守卫
//   createRouterGuards(router);
}

export default router;
