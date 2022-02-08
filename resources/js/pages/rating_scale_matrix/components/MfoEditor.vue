<template>
  <div
    class="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
  >
    <form @submit.prevent="saveSubFunction()" class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            <i class="fa-solid fa-arrow-turn-down"></i>
            {{ mfo.code }}
            {{ mfo.function }}
            <i class="text-success">(Add Subfunction)</i>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row g-2">
            <div class="col-3">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="category_number"
                  placeholder="Category Number"
                  v-model="code"
                />
                <label for="category_number">Category Number:</label>
              </div>
            </div>
            <div class="col-9">
              <div class="form-floating">
                <input
                  type="text"
                  class="form-control"
                  id="mfo_title"
                  placeholder="Title"
                  v-model="mfoTitle"
                />
                <label for="mfo_title">MFO/PAP Title:</label>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button type="submit" class="btn btn-primary" data-bs-dismiss="modal">
            Save changes
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "MfoEditor",
  props: {
    mfo: Object,
  },
  data() {
    return {
      el: null,
      code: "",
      mfoTitle: "",
    };
  },
  watch: {},
  methods: {
    clearSubfunction() {
      this.code = "";
      this.mfoTitle = "";
    },
    saveSubFunction() {
      // console.log(this.mfo.rating_scale_matrix_id);
      axios
        .post("/api/rsm/add_subfunction", {
          parent_id: this.mfo.rating_scale_matrix_id,
          code: this.code,
          function: this.mfoTitle,
          period: this.mfo.period,
          year: this.mfo.year,
          department_id: this.mfo.department_id,
        })
        .then(({ data }) => {
          console.log("action added subfunction!: ", data);
          this.$emit("addedSubFunction");
        })
        .catch(({ response: { data } }) => {
          alert(response);
        });
    },
  },
  mounted() {
    /* 
            get this child modal element id
        */
    this.el = document.getElementById(this.$el.id);

    /*
            everytime the modal shows the data are fetched
        */
    // this.el.addEventListener("shown.bs.modal", (event) => {
    //   if (this.success_indicator_id > 0) {
    //     this.get_success_indicator();
    //   }
    // });

    /* 
    everytime the modal hides the data are cleared!
    */
    this.el.addEventListener("hidden.bs.modal", (event) => {
      this.code = ''
      this.mfoTitle = ''
    });
  },
};
</script>