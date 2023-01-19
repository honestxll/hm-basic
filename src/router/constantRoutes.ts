import Main from '../views/layout/Main.vue'

export default [
  {
    path: '/',
    component: Main,
    children: [
      {
        path: '/',
        component: () => import('../views/pages/Home.vue'),
        meta: {
          title: '主页',
        },
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/pages/Login.vue'),
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/pages/Blog.vue'),
    meta: {
      auth: 'blog',
    },
  },
]
