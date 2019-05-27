    import Vue from 'vue'
    import VueRouter from 'vue-router'

    Vue.use(VueRouter);

    // Router components
    import AuthPage from '../components/auth/AuthPage.vue';
    import Login from '../components/auth/components/login.vue';
    import ForgotPassword from '../components/auth/components/forgotPassword.vue';
    import Register from '../components/auth/components/register.vue';
    import Reg_confirm from '../components/auth/components/reg_confirm.vue';
    import Check from '../components/auth/components/check.vue';


    import Index from '../components/account/index.vue';
    import Body from '../components/account/body.vue';
    import Busket from '../components/account/busket.vue';
    import AllOrder from '../components/account/allorders.vue';


    import UserPage from '../components/account/UserPage.vue';
    import User from '../components/account/user.vue';
    import New from '../components/account/new.vue';
    import Calculation from '../components/account/calculation.vue';
    import Settings from '../components/account/settings.vue';
    import Faq from '../components/account/faq.vue';
    import ErrorPage from '../components/error/404.vue';

    const router = new VueRouter({
    routes: [
            {
                path: '/user',
                component: AuthPage,
                meta: { guest: true },
                children: [
                    { path: '', component: Login },
                    { path: 'login', component: Login },
                    { path: 'forgotPassword', component: ForgotPassword },
                    { path: 'register', component: Register },
                    { path: 'reg_confirm', component: Reg_confirm },
                    { path: 'check', component: Check }
                ]
            }, 
            {
                 path: '/new', 
                 component: New,
            },
            {
                path: '/calculation', 
                component: Calculation,
            },
            { path: '/settings', component: Settings },
            {
                path: '/',
                component: Index,
                // meta: { requiresAuth: true },
                children: [
                    { path: '/', component: Body  },
                    { path: 'busket', component: Busket },
                    { path: 'allorders', component: AllOrder },
                ]
            },
            {
                path: '*',
                component: ErrorPage,
            }
    ],
    mode: 'history'
    });

    router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
        if ($cookies.get('token') == null) {
            next({
                path: '/login',
                params: { nextUrl: to.fullPath }
            })
        } 
        else {
            next()
        }
    } else if(to.matched.some(record => record.meta.guest)) {
        if($cookies.get('token') == null){
            next()
        }
        else{
            next({ path: '/'})
        }
    }else {
        next() 
    }
    })

    export default router;


