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
            period: this.$route.params.period
        };
    },
    computed: {
        
    },
    methods: {
        
    },
    mounted() {

    },
};