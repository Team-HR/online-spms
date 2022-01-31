<template>
  <div class="modal fade" id="editMfoModal" tabindex="-1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Add New Success Indicator</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form id="form_edit_mfo" @submit.prevent="submit_form()">
            <!-- success indicator input start -->
            <div class="row g-2 mb-2">
              <div class="col">
                <!-- <div class="form-floating"> -->
                <label class="form-label" for="success_indicator"
                  ><i class="fa-solid fa-trophy"></i> Success Indicator:</label
                >
                <textarea
                  class="form-control"
                  id="success_indicator"
                  placeholder="...."
                  style="height: 100px"
                  v-model="success_indicator"
                ></textarea>

                <!-- </div> -->
              </div>
            </div>
            <!-- success indicator input end -->
            <hr />
            <!-- accordion start -->
            <label class="form-label"
              ><i class="fa-solid fa-pen-ruler"></i> Performance
              Measures:</label
            >
            <div
              class="accordion accordion-flush"
              id="accordionPanelsStayOpenExample"
            >
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseOne"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseOne"
                  >
                    Quality
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseOne"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingOne"
                >
                  <div class="accordion-body">
                    <div
                      class="input-group input-group-sm mb-1"
                      v-for="n in 5"
                      :key="n"
                    >
                      <span class="input-group-text" id="inputGroup-sizing-sm"
                        >{{ 5 - (n - 1) }}=</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        v-model="quality[5 - (n - 1) - 1]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseTwo"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseTwo"
                  >
                    Efficiency
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingTwo"
                >
                  <div class="accordion-body">
                    <div
                      class="input-group input-group-sm mb-1"
                      v-for="n in 5"
                      :key="n"
                    >
                      <span class="input-group-text" id="inputGroup-sizing-sm"
                        >{{ 5 - (n - 1) }}=</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        v-model="efficiency[5 - (n - 1) - 1]"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#panelsStayOpen-collapseThree"
                    aria-expanded="true"
                    aria-controls="panelsStayOpen-collapseThree"
                  >
                    Timeliness
                  </button>
                </h2>
                <div
                  id="panelsStayOpen-collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="panelsStayOpen-headingThree"
                >
                  <div class="accordion-body">
                    <div
                      class="input-group input-group-sm mb-1"
                      v-for="n in 5"
                      :key="n"
                    >
                      <span class="input-group-text" id="inputGroup-sizing-sm"
                        >{{ 5 - (n - 1) }}=</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        aria-label="Sizing example input"
                        aria-describedby="inputGroup-sizing-sm"
                        v-model="timeliness[5 - (n - 1) - 1]"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- accordion end -->
            <hr />
            <label class="form-label"
              ><i class="fa-solid fa-user-tag"></i> Assigned Employees:</label
            >
            <!-- assigned employees search start -->
            <div class="mt-2">
              <!-- accordion start -->
              <div class="accordion">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button
                      class="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#assignEmployeePanel"
                    >
                      <i class="fa-solid fa-plus me-2"></i>
                      Add
                      <i style="color: grey">(Click here to add)</i>
                    </button>
                  </h2>
                  <div
                    id="assignEmployeePanel"
                    class="accordion-collapse collapse"
                  >
                    <div class="accordion-body">
                      <!-- employee selection start -->
                      <input
                        width="500"
                        class="form-control"
                        placeholder="Search name of employee to add here..."
                        v-model="employeeSearch"
                      />

                      <div class="list-group mt-2">
                        <button
                          v-if="employees.length == 0"
                          type="button"
                          class="list-group-item list-group-item-action"
                          disabled
                          style="text-align: center"
                        >
                          ----
                        </button>
                        <button
                          type="button"
                          class="list-group-item list-group-item-action"
                          v-for="(employee, e) in employees"
                          :key="e"
                          @click="add_to_incumbents(e)"
                        >
                          {{ employee.full_name }}
                          <span class="text-success"
                            ><i>(Click to add)</i></span
                          >
                        </button>
                      </div>
                      <!-- employee selection end -->
                    </div>
                  </div>
                </div>
              </div>
              <!-- accordion end -->
              <!-- incumbents selection start -->
              <div class="list-group my-2">
                <button
                  v-if="incumbents.length == 0"
                  type="button"
                  class="list-group-item list-group-item-action"
                  disabled
                  style="text-align: center"
                >
                  -- None --
                </button>
                <div
                  class="list-group-item"
                  v-for="(incumbent, i) in incumbents"
                  :key="i"
                >
                  <button
                    class="btn text-danger btn-light btn-sm me-2"
                    @click="remove_from_incumbent(i)"
                  >
                    Remove
                  </button>
                  {{ incumbent.full_name }}
                  <!-- <span class="text-danger"><i>(Click to remove)</i></span> -->
                </div>
              </div>
              <!-- incumbents selection end -->
            </div>
            <!-- assigned employees search end -->
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Cancel
          </button>
          <button
            form="form_edit_mfo"
            type="submit"
            class="btn btn-primary"
            data-bs-dismiss="modal"
          >
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "successindicatormodal",
  props: {
    title: String,
    success_indicator_id: Number,
    isPublished: Boolean,
    commentIds: Array,
    author: Object,
    callback: Function,
    contactsPromise: Promise, // or any other constructor
  },
  data() {
    return {
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
    success_indicator_id(newValue) {
      // console.log("success_indicator_id", newValue);
      this.success_indicator = "";
      this.quality = [];
      this.efficiency = [];
      this.timeliness = [];
      this.incumbents = [];
      if (newValue > 0) {
        this.get_success_indicator();
      }
    },
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

          console.log("/api/rsm/get_success_indicator", data);
        })
        .catch((err) => {
          console.error(err);
        });
    },
    submit_form() {
      var payload = {
        success_indicator: this.success_indicator,
        quality: this.quality,
        efficiency: this.efficiency,
        timeliness: this.timeliness,
        incumbents: this.incumbents,
      };
      // console.log(payload);

      axios({
        method: "post",
        url: "/api/rsm/save_success_indicator",
        data: {
          id: this.success_indicator_id,
          success_indicator: this.success_indicator,
          quality: this.quality,
          efficiency: this.efficiency,
          timeliness: this.timeliness,
          incumbents: this.incumbents,
        },
      }).then(({ data }) => {
        this.$emit("test");
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
      // console.log(this.incumbents);
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
    // this.get_employees_list();
    // console.log(this.success_indicator_id)
  },
};
</script>