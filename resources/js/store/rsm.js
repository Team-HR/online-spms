import axios from 'axios'
import router from '../router'

export default {
    namespaced: true,
    state:{
        items:[]
    },
    getters:{
        items(state){
            return state.items
        },
    },
    mutations:{
        SET_ITEMS (state, value) {
            state.items = value
        }
    },
    actions:{
        get_items({commit}){
            return axios.get('/api/rsm').then(({data})=>{
                commit('SET_ITEMS',data)
            }).catch(({response:{data}})=>{
                alert("ERROR FETCHING DATA!");
            })
        }
    }
}