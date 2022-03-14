import  EmployeeSelector from "../../../components/EmployeeSelector.vue";
export default {
    name: "SignatoriesEditor",
    components: {
        EmployeeSelector,
    },
    data() {
        return {
            immediateSupervisor: {
                id: 1,
                full_name: 'Test1'
            },
            departmentHead: {
                id: 2,
                full_name: 'Test2'
            },
            year: this.$route.params.year,
            period: this.$route.params.period,
        };
    },
    methods: {
        logMe(e){
            console.log(e);
        },

        showSelected(type){
            alert(type)
        }
    },
    mounted() {
        
    },
};