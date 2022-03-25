import axios from 'axios'
import router from '../router'

export default {
    namespaced: true,
    state: {
        steps: [
            {
                title: 'Status',
                desc: 'Shows an overview of the pcr form status.',
                rtName: 'status',
                icon: '',
                buttonName: 'Fill out',
                isActive: true,
            },
            {
                title: 'Signatories',
                desc: 'Set the form type, immediate supervisor, department head and head of agency.',
                rtName: 'signatories',
                icon: '',
                buttonName: 'Fill out',
                isDone: true,
                isActive: false,
            },
            {
                title: 'Core Functions',
                desc: 'Assess your major function commitments.',
                rtName: '',
                icon: '',
                buttonName: 'Fill out',
                isDone: false,
                isActive: false,
            },
            {
                title: 'Support Functions',
                desc: 'Assess your support function commitments.',
                rtName: '',
                icon: '',
                buttonName: 'Fill out',
                isDone: false,
                isActive: false,
            },
            {
                title: 'Strategic Functions',
                desc: 'Assess your strategic function commitments.',
                rtName: '',
                icon: '',
                buttonName: 'Fill out',
                isDone: false,
                isActive: false,
            },
            {
                title: 'Submission',
                desc: 'Submit the accomplished performance commitment and review form for approval and certification.',
                rtName: '',
                icon: 'fa-solid fa-paper-plane',
                buttonName: 'Submit',
                isDone: false,
                isActive: false,
            },
        ]
    },
    getters: {
        activeTab (state){
            for (let index = 0; index < state.steps.length; index++) {
                if (state.steps[index].isActive) {
                    return state.steps[index]
                }
            }
        }
    },
    mutations: {
        SET_ACTIVE_TAB (state, value) {
            for (let index = 0; index < state.steps.length; index++) {
                state.steps[index].isActive = false
            }
            state.steps[value].isActive = true
        }
    },
    actions: {
        setActiveTab({commit}, payload) {
            commit('SET_ACTIVE_TAB',payload)
        }
    }
}