const Home = () => import('@/pages/Home')
const Login = () => import('@/pages/Login')
const Register = () => import('@/pages/Register')

export default [
    {
        // 首页
        path: "/home",
        component: Home
    },
    {
        // 登陆
        path: "/login",
        component: Login
    },
    {
        // 注册
        path: "/register",
        component: Register
    },
]