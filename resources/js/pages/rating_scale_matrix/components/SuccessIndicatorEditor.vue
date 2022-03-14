<template>
  <div
    class="modal fade"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
  >
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
              class="accordion accordion-flush pfmeasures"
              id="accordionPanelsStayOpenExample"
            >
              <div class="accordion-item">
                <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                  <button
                    class="accordion-button"
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
                  class="accordion-collapse collapse show"
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
                    class="accordion-button"
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
                  class="accordion-collapse collapse show"
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
                    class="accordion-button"
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
                  class="accordion-collapse collapse show"
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

<script src="./SuccessIndicatorEditor.js"></script>