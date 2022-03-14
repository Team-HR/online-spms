export default {
    name: "PerformanceReview",
    components: {
    },
    data() {
        return {
            year: this.$route.params.year,
            period: this.$route.params.period,
            steps: [
                {
                    title: 'Signatories',
                    desc: 'Set the form type, immediate supervisor, department head and head of agency.',
                    href: '/pcr/year/2022/period/1/signatories',
                    hrefIcon: 'fa-solid fa-pen-to-square',
                    buttonName: 'Fill out',
                    status: 'Incomplete'
                },
                {
                    title: 'Core Functions',
                    desc: 'Assess your major function commitments.',
                    href: '/',
                    hrefIcon: 'fa-solid fa-pen-to-square',
                    buttonName: 'Fill out',
                    status: 'Incomplete'
                },
                {
                    title: 'Support Functions',
                    desc: 'Assess your support function commitments.',
                    href: '/',
                    hrefIcon: 'fa-solid fa-pen-to-square',
                    buttonName: 'Fill out',
                    status: 'Incomplete'
                },
                {
                    title: 'Strategic Functions',
                    desc: 'Assess your strategic function commitments.',
                    href: '/',
                    hrefIcon: 'fa-solid fa-pen-to-square',
                    buttonName: 'Fill out',
                    status: 'Incomplete'
                },
                {
                    title: 'Submission',
                    desc: 'Submit the accomplished performance commitment and review form for approval and certification.',
                    href: '/',
                    hrefIcon: 'fa-solid fa-paper-plane',
                    buttonName: 'Submit',
                    status: 'Incomplete'
                },
            ]
        };
    },
    methods: {
    },
    mounted() {
        
    },
};