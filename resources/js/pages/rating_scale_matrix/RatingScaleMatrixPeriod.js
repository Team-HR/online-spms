import SuccessIndicatorEditor from "./components/SuccessIndicatorEditor.vue"
import DeleteConfirmation from "./components/DeleteConfirmation.vue"
import MfoEditor from "./components/MfoEditor.vue"
import MfoParentEditor from "./components/MfoParentEditor.vue"
export default {
    name: "RatingScaleMatrix",
    components: {
        SuccessIndicatorEditor,
        DeleteConfirmation,
        MfoEditor,
        MfoParentEditor
    },
    data() {
        return {
            period: this.$route.params.period,
            year: this.$route.params.year,
            new_mfo: {
                category: "",
                title: "",
            },
            items: [],
            edit_mfo_item: {},
            edit_rating_scale_matrix_id: 0,
            edit_success_indicator_id: 0,
        };
    },
    methods: {
        addSubFunction(edit_mfo_item) {
            this.edit_mfo_item = edit_mfo_item
        },
        deleteMfo(rating_scale_matrix_id) {
            this.edit_rating_scale_matrix_id = rating_scale_matrix_id
            this.edit_success_indicator_id = 0
        },
        deleteSuccessIndicator(id) {
            this.edit_rating_scale_matrix_id = 0
            this.edit_success_indicator_id = id
        },
        add_success_indicator(rating_scale_matrix_id) {
            // console.log(item.rating_scale_matrix_id);
            this.edit_rating_scale_matrix_id = rating_scale_matrix_id
            this.edit_success_indicator_id = 0
        },
        edit_success_indicator(id) {
            this.edit_rating_scale_matrix_id = 0
            this.edit_success_indicator_id = id;
            // console.log('si_id',id);
        },
        edit_mfo(item) {
            var item = JSON.parse(JSON.stringify(item));
            this.edit_mfo_item = {
                id: item.rating_scale_matrix_id,
                code: item.code,
                function: item.function,
            };
            // console.log(this.edit_mfo_item);
        },
        async save_edit_mfo() {
            await axios
                .post("/api/rsm/save_edit_mfo", {
                    id: this.edit_mfo_item.id,
                    code: this.edit_mfo_item.code,
                    function: this.edit_mfo_item.function,
                })
                .then(({ data }) => {
                    console.log("action submit form!: ", data);
                    var myModalEl = document.getElementById("editMfoModal");
                    var modal = bootstrap.Modal.getInstance(myModalEl); // Returns a Bootstrap modal instance
                    modal.hide();
                    this.getItems().then(() => { });
                })
                .catch(({ response: { data } }) => {
                    // alert(response);
                    // console.log(response);
                });
        },
        async submit_new_mfo() {
            await axios
                .post("/api/rsm/add_new_mfo", {
                    new_mfo: this.new_mfo,
                    period: this.period,
                    year: this.year,
                })
                .then(({ data }) => {
                    this.getItems().then(() => {
                        this.new_mfo.category = "";
                        this.new_mfo.title = "";
                    });
                })
                .catch(({ response: { data } }) => {
                    alert(data.message);
                    console.log(data);
                });
        },
        async getItems() {
            await axios
                .get("/api/rsm", {
                    params: {
                        period: this.period,
                        year: this.year,
                    },
                })
                .then(({ data }) => {
                    this.items = JSON.parse(JSON.stringify(data));
                })
                .catch(({ response: { data } }) => {
                    alert(data.message);
                    // console.log(data);
                });
        },

        set_text_indent(order_number_mfo) {
            var tabs = ""
            if (!order_number_mfo) return tabs
            tabs = "margin-left:" + 15 * order_number_mfo + "px;"
            return tabs
        }
    },
    mounted() {
        this.getItems()
        // console.log(this.year);
        // console.log(this.period);
    },
};