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
const PerformanceReview = () => import('../pages/performance_review/Index.vue')
const PerformanceReviewPeriod = () => import('../pages/performance_review/PerformanceReview.vue')
const PerformanceReviewPeriodSignatories = () => import('../pages/performance_review/components/SignatoriesEditor.vue')
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
                name: "rsmPeriod",
                path: "/rsm/year/:year/period/:period",
                component: RatingScaleMatrixPeriod,
                meta: {
                    title: `RSM Period`
                }
            },
            {
                name: "pcr",
                path: "/pcr",
                component: PerformanceReview,
                meta: {
                    title: `Performance Review`
                }
            },
            {
                name: "pcrPeriod",
                path: "/pcr/year/:year/period/:period",
                component: PerformanceReviewPeriod,
                meta: {
                    title: `PCR Period`
                }

            },
            {
                name: "pcrPeriodSignatories",
                path: "/pcr/year/:year/period/:period/signatories",
                component: PerformanceReviewPeriodSignatories,
                meta: {
                    title: `Edit Signatories`
                }

            }
        ]
    }
]

var router = new VueRouter({
    mode: 'history',
    routes: Routes
})

router.beforeEach((to, from, next) => {
    store.dispatch('setPath',to.path)
    
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