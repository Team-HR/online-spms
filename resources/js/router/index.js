import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

/* Guest Component */
const Login = () => import('../components/Login.vue' /* webpackChunkName: "resource/js/components/login" */)
const Register = () => import('../components/Register.vue' /* webpackChunkName: "resource/js/components/register" */)
/* Guest Component */

/* Layouts */
const AppNavbarComponent = () => import('../components/Layouts/AppNavbarComponent.vue' /* webpackChunkName: "resource/js/components/layouts/appnavbarcomponent" */)
/* Layouts */

/* Authenticated Component */
const Dashboard = () => import('../components/Dashboard.vue' /* webpackChunkName: "resource/js/components/dashboard" */)
const RatingScaleMatrix = () => import('../pages/rating_scale_matrix/Index.vue')
const RatingScaleMatrixPeriod = () => import('../pages/rating_scale_matrix/RatingScaleMatrixPeriod.vue')
/* Authenticated Component */


const Routes = [
    {
        name: "login",
        path: "/login",
        component: Login,
        meta: {
            middleware: "guest",
            title: `Login`
        }
    },
    {
        name: "register",
        path: "/register",
        component: Register,
        meta: {
            middleware: "guest",
            title: `Register`
        }
    },

    {
        path: "/",
        component: AppNavbarComponent,
        meta: {
            middleware: "auth"
        },
        children: [
            {
                name: "dashboard",
                path: '/',
                component: Dashboard,
                meta: {
                    title: `Dashboard`
                }
            },
            {
                name: "rsm",
                path: "/rsm",
                component: RatingScaleMatrix,
                meta: {
                    title: `Rating Scale Matrix`
                }
            },
            {
                name: "period",
                path: "/rsm/period/year/:year/period/:period",
                component: RatingScaleMatrixPeriod,
                meta: {
                    title: `RSM Period`
                }
            },
        ]
    }
]

var router = new VueRouter({
    mode: 'history',
    routes: Routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title} - ${process.env.MIX_APP_NAME}`
    if (to.meta.middleware == "guest") {
        if (store.state.auth.authenticated) {
            next({ name: "dashboard" })
        }
        next()
    } else {
        // store.dispatch('auth/fetchuser').then(() => {
        if (store.state.auth.authenticated) {
            next()
        } else {
            next({ name: "login" })
        }
        // })


    }
})

export default router