// 路由映射关系

// import Todo from '../views/todo/todo.vue'
import Login from '../views/login/login.vue'

// const Todo = () => import('../views/todo/todo.vue')
// const Login = () => import('../views/login/login.vue')

export default [
  {
    path: '/',
    redirect: { name: 'app' }
  },
  {
    path: '/app/:id',
    // path: '/app',
    props: true, // :id传递到Todo组件
    // props: {
    //   id: '456'
    // },
    // props: (route) => ({ id: route.query.b }),
    name: 'app',
    // components: {
    //   default: Todo,
    //   a: Login
    // },
    // component: Todo,
    component: () => import('../views/todo/todo.vue'),
    meta: {
      title: 'this is app',
      description: 'this is app description'
    },
    // children: [
    //   {
    //     path: 'test',
    //     component: Login
    //   }
    // ],
    beforeEnter (to, from, next) {
      console.log('app route before enter')
      next()
    },
  },
  {
    path: '/login',
    name: 'login',
    // componets: {
    //   default: Login,
    //   a: Todo
    // },
    // component: Login,
    component: () => import('../views/login/login.vue'),
    meta: {
      title: 'this is login page',
      description: 'this is login description'
    }    
  },
]