export default {
    name: "SuccessIndicatorEditor",
    props: {
        title: String,
        success_indicator_id: Number,
        rating_scale_matrix_id: Number,
        isPublished: Boolean,
        commentIds: Array,
        author: Object,
        callback: Function,
        contactsPromise: Promise, // or any other constructor
    },
    data() {
        return {
            el: null, //this element component
            employeeSearch: "",
            employees: [],
            success_indicator: "",
            quality: [],
            efficiency: [],
            timeliness: [],
            incumbents: [],
        };
    },
    watch: {
        // success_indicator_id(newValue) {
        //     // console.log("success_indicator_id", newValue)
        //     this.success_indicator = ""
        //     this.quality = []
        //     this.efficiency = []
        //     this.timeliness = []
        //     this.incumbents = []
        //     if (newValue > 0) {
        //         this.get_success_indicator()
        //     }
        // },
        // rating_scale_matrix_id(newValue) {
        //   this.success_indicator = "";
        //   this.quality = [];
        //   this.efficiency = [];
        //   this.timeliness = [];
        //   this.incumbents = [];
        // },
        employeeSearch(newValue, oldValue) {
            // console.log(newValue);
            if (newValue == "") {
                this.employees = [];
            } else this.get_employees_list();
        },
    },
    methods: {
        async get_success_indicator() {
            this.success_indicator = "";
            this.quality = [];
            this.efficiency = [];
            this.timeliness = [];
            this.incumbents = [];
            await axios
                .get("/api/rsm/get_success_indicator", {
                    params: {
                        id: this.success_indicator_id,
                    },
                })
                .then(({ data }) => {
                    this.success_indicator = data.success_indicator;

                    /* remap incumbent array */
                    var incumbents = JSON.parse(JSON.stringify(data.incumbents));
                    incumbents.forEach((element) => {
                        this.incumbents.push({
                            id: element.employee_id,
                            full_name: element.full_name,
                        });
                    });
                    /* sort incumbents by full_name ascending after push*/
                    this.incumbents.sort((x, y) => {
                        let a = x.full_name.toUpperCase(),
                            b = y.full_name.toUpperCase();
                        return a == b ? 0 : a > b ? 1 : -1;
                    });

                    /* quality parsing */
                    if (data.quality) {
                        var quality = JSON.parse(JSON.stringify(data.quality));
                        quality.forEach((element) => {
                            // this.quality[element.score] = element.desc;
                            this.quality.push(element);
                        });
                    }

                    /* efficiency parsing */
                    if (data.efficiency) {
                        var efficiency = JSON.parse(JSON.stringify(data.efficiency));
                        efficiency.forEach((element) => {
                            // this.efficiency[element.score - 1] = element.desc;
                            this.efficiency.push(element);
                        });
                    }

                    // /* timeliness parsing */
                    if (data.timeliness) {
                        var timeliness = JSON.parse(JSON.stringify(data.timeliness));
                        timeliness.forEach((element) => {
                            // this.timeliness[element.score - 1] = element.desc;
                            this.timeliness.push(element);
                        });
                    }

                    // console.log("/api/rsm/get_success_indicator", data);
                })
                .catch((err) => {
                    console.error(err);
                });
        },
        submit_form() {
            // var payload = {
            //     rating_scale_matrix_id: this.rating_scale_matrix_id,
            //     success_indicator_id: this.success_indicator_id,
            //     success_indicator: this.success_indicator,
            //     quality: this.quality,
            //     efficiency: this.efficiency,
            //     timeliness: this.timeliness,
            //     incumbents: this.incumbents,
            // };
            // console.log("submitted payload:", payload);
            axios({
                method: "post",
                url: "/api/rsm/save_success_indicator",
                data: {
                    id: this.success_indicator_id,
                    rating_scale_matrix_id: this.rating_scale_matrix_id,
                    success_indicator: this.success_indicator,
                    quality: this.quality,
                    efficiency: this.efficiency,
                    timeliness: this.timeliness,
                    incumbents: this.incumbents,
                },
            }).then(({ data }) => {
                this.$emit("submittedForm");
            });
        },

        /* 
          adds the selected 
          employee to list of incumbents
        */

        add_to_incumbents(i) {
            var employee = this.employees[i];
            this.employees.splice(i);
            this.incumbents.push(employee);
            /* sort incumbents by full_name ascending after push*/
            this.incumbents.sort((x, y) => {
                let a = x.full_name.toUpperCase(),
                    b = y.full_name.toUpperCase();
                return a == b ? 0 : a > b ? 1 : -1;
            });
            this.employeeSearch = "";
        },

        /* 
          remove the selected
          employee from list of incumbents
        */
        remove_from_incumbent(i) {
            this.incumbents.splice(i, 1);
            /* for search to work employeeSearch must be empty */
            this.employeeSearch = "";
        },

        /* 
          gets list of available
          employees from db except the employees
          existing in list of incumbents
        */
        async get_employees_list() {
            await axios
                .post("api/employees", {
                    name: this.employeeSearch,
                    excepts: this.incumbents,
                })
                .then(({ data }) => {
                    // console.log(data);
                    this.employees = JSON.parse(JSON.stringify(data));
                })
                .catch((err) => {
                    console.error(err);
                });
        },
    },
    mounted() {
        /* 
            get this child modal element id
        */
        this.el = document.getElementById(this.$el.id)

        /*
            everytime the modal shows the data are fetched
        */
        this.el.addEventListener('shown.bs.modal', (event) => {
            if (this.success_indicator_id > 0) {
                this.get_success_indicator()
            }
        })

        /* 
            everytime the modal hides the data are cleared!
        */
        this.el.addEventListener('hidden.bs.modal', (event) => {
            this.success_indicator = ''
            this.quality = []
            this.efficiency = []
            this.timeliness = []
            this.incumbents = []
            var accordionButton = this.el.getElementsByClassName("accordion-button")
            for (let index = 0; index < accordionButton.length; index++) {
                const element = accordionButton[index];
                element.classList.remove("collapsed")
                element.classList.add("collapsed")
                // console.log(element);
            }
            var accordionCollapse = this.el.getElementsByClassName("accordion-collapse")
            for (let index = 0; index < accordionCollapse.length; index++) {
                const element = accordionCollapse[index];
                element.classList.remove("show")
            }

        })

    },
};