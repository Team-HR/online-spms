import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import auth from './auth'
import rsm from './rsm'
import pcr from './pcr'

/*
##########################################
#getting getters
this.store.getters['pcr/steps']
#getting states
 this.store.state.pcr.steps
##########################################
*/

Vue.use(Vuex)

export default new Vuex.Store({
    plugins:[
        createPersistedState()
    ],
    modules:{
        auth,
        rsm,
        pcr
    },
    state:{
        path:''
    },
    getters:{
        path(state){
            return state.path
        },
    },
    mutations:{
        SET_PATH (state, value) {
            state.path = value
        }
    },
    actions:{
        setPath({commit},payload){
            // console.log(payload);
            // var pathName = new URL(location.href).pathname
            commit('SET_PATH',payload)
            // return axios.get('/api/rsm').then(({data})=>{
            //     commit('SET_ITEMS',data)
            // }).catch(({response:{data}})=>{
            //     alert("ERROR FETCHING DATA!");
            // })
        }
    }
})