<template>
  <div>
    <button
      type="button"
      class="btn btn-primary m-3"
      data-bs-toggle="modal"
      data-bs-target="#employeeSelectorModal"
    >
      <span v-if="employee.full_name">Change</span>
      <span v-else>Select a Personnel</span>
    </button>

    <!-- <strong class="h5 mx-2" v-if="employee.full_name">{{
      employee.full_name
    }}</strong> -->

    <!-- Button trigger modal -->

    <!-- Modal -->
    <div
      class="modal fade"
      id="employeeSelectorModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Select Personnel</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search personnel's name here..."
                v-model="name"
                @keyup="getEmployees()"
              />
            </div>

            <div class="list-group">
              <button
                type="button"
                class="list-group-item list-group-item-action"
                aria-current="true"
                v-for="(employee, e) in employees"
                :key="e"
                @click="selectEmployee(employee)"
              >
                {{ employee.full_name }}
              </button>
            </div>

            <div class="h4" style="text-align: center" v-if="notFound">
              Name not Found
            </div>
          </div>
          <div class="modal-footer"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "PeriodSelector",
  props: {
    path: String,
    icon: String,
  },
  data() {
    return {
      name: "",
      employee: {},
      notFound: false,
      employees: [],
      modal: {},
    };
  },
  methods: {
    selectEmployee(employee) {
      //   var myModalEl = document.querySelector("#exampleModal");
      //   var modal = bootstrap.Modal.getOrCreateInstance(myModalEl); // Returns a Bootstrap modal instance
      this.employee = employee;
      this.modal.hide();
      this.name = "";
      this.$emit("selectedEmployee",employee)
      this.employees = [];
    },
    async getEmployees() {
      if (!this.name) {
        this.notFound = false;
        this.employees = [];
        return false;
      }
      await axios({
        method: "post",
        data: {
          name: this.name,
          excepts: [],
        },
        url: "/api/employees",
      }).then(({ data }) => {
        if (data.length > 0) {
          this.notFound = false;
          this.employees = data;
        } else {
          this.notFound = true;
          this.employees = [];
        }
      });
    },
  },
  mounted() {
    var myModalEl = document.querySelector("#employeeSelectorModal");
    this.modal = bootstrap.Modal.getOrCreateInstance(myModalEl); // Returns a Bootstrap modal instance

  },
};
</script>

