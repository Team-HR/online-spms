import SignatoriesEditor from './components/SignatoriesEditor.vue'
import Status from './components/Status.vue'
export default {
    name: "PerformanceReview",
    components: {
        Status,
        SignatoriesEditor,
    },
    data() {
        return {
            year: this.$route.params.year,
            period: this.$route.params.period,
            steps: [
                {
                    title: 'Status',
                    desc: 'Shows an overview of the pcr form status.',
                    routeName: 'status',
                    icon: '',
                    buttonName: 'Fill out',
                    isActive: true,
                },
                {
                    title: 'Signatories',
                    desc: 'Set the form type, immediate supervisor, department head and head of agency.',
                    routeName: 'signatories',
                    icon: '',
                    buttonName: 'Fill out',
                    isDone: true,
                    isActive: false,
                },
                {
                    title: 'Core Functions',
                    desc: 'Assess your major function commitments.',
                    routeName: '',
                    icon: '',
                    buttonName: 'Fill out',
                    isDone: false,
                    isActive: false,
                },
                {
                    title: 'Support Functions',
                    desc: 'Assess your support function commitments.',
                    routeName: '',
                    icon: '',
                    buttonName: 'Fill out',
                    isDone: false,
                    isActive: false,
                },
                {
                    title: 'Strategic Functions',
                    desc: 'Assess your strategic function commitments.',
                    routeName: '',
                    icon: '',
                    buttonName: 'Fill out',
                    isDone: false,
                    isActive: false,
                },
                {
                    title: 'Submission',
                    desc: 'Submit the accomplished performance commitment and review form for approval and certification.',
                    routeName: '',
                    icon: 'fa-solid fa-paper-plane',
                    buttonName: 'Submit',
                    isDone: false,
                    isActive: false,
                },
            ]
        };
    },
    computed: {
        activeStep (){
            for (let index = 0; index < this.steps.length; index++) {
                if (this.steps[index].isActive) {
                    return this.steps[index]
                }
            }
        }
    },
    methods: {
        setActive(s) {
            for (let index = 0; index < this.steps.length; index++) {
                this.steps[index].isActive = false
            }
            this.steps[s].isActive = true
        }
    },
    mounted() {

    },
};