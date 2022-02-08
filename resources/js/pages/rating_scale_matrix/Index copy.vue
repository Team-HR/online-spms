<template>
  <div class="container-fluid">
    <SuccessIndicatorEditor
      id="successIndicatorEditor"
      :success_indicator_id="edit_success_indicator_id"
      :rating_scale_matrix_id="edit_rating_scale_matrix_id"
      @submittedForm="getItems()"
    />
    <DeleteConfirmation
      id="deleteConfirmation"
      :text="'the item'"
      :success_indicator_id="edit_success_indicator_id"
      :rating_scale_matrix_id="edit_rating_scale_matrix_id"
      @deleteConfirmed="getItems()"
    />
    <MfoEditor
      id="mfoEditor"
      :mfo="edit_mfo_item"
      @addedSubFunction="getItems()"
    />
    <!-- 
    Edit MFO start
   -->
    <div
      class="modal fade"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      id="editMfoModal"
      tabindex="-1"
    >
      <form
        id="form_edit_mfo"
        @submit.prevent="save_edit_mfo()"
        class="modal-dialog modal-lg"
      >
        <div class="modal-content">
          <div class="modal-header">
            <!-- {{edit_mfo_item.code +" "+edit_mfo_item.function}} -->
            <h5 class="modal-title">Edit MFO/PAP</h5>
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
                    v-model="edit_mfo_item.code"
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
                    v-model="edit_mfo_item.function"
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
            <button type="submit" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </form>
    </div>
    <!-- 
    Edit MFO end
   -->
    <div class="row">
      <div class="col-12">
        <div class="card shadow-sm">
          <div class="card-header">
            <h3>Rating Scale Matrix</h3>
          </div>
          <div class="card-body">
            <p class="mb-0">Rating Scale Matrix</p>
            <table class="table table-bordered">
              <thead>
                <tr class="text-center">
                  <th scope="col"></th>
                  <th scope="col">MFO/PAP</th>
                  <th scope="col">SUCCESS INDICATOR</th>
                  <th scope="col">PERFORMANCE MEASURE</th>
                  <th scope="col">Q</th>
                  <th scope="col">E</th>
                  <th scope="col">T</th>
                  <th scope="col">IN-CHARGE</th>
                  <th scope="col" colspan="2">OPTIONS</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(item, i) in items" :key="i">
                  <td
                    style="vertical-align: middle"
                    v-if="item.code"
                    :rowspan="item.rowspan"
                  >
                    <span class="dropdown">
                      <button
                        class="
                          btn btn-sm btn-light
                          dropdown-toggle
                          text-success
                        "
                        type="button"
                        id="dropdownMenu2"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        <i class="fa-solid fa-gear"></i>
                        Configure
                      </button>
                      <ul
                        class="dropdown-menu shadow-lg"
                        aria-labelledby="dropdownMenu2"
                      >
                        <li>
                          <button
                            class="dropdown-item"
                            type="button"
                            @click="edit_mfo(item)"
                            data-bs-toggle="modal"
                            data-bs-target="#editMfoModal"
                          >
                            <i class="fa-solid fa-pen-to-square"></i>
                            Edit MFO/PAP
                          </button>
                        </li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                          <button
                            class="dropdown-item"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#successIndicatorEditor"
                            @click="
                              add_success_indicator(item.rating_scale_matrix_id)
                            "
                          >
                            <i class="fa-solid fa-square-plus"></i>
                            Add Success Indicator
                          </button>
                        </li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                          <button class="dropdown-item" type="button">
                            <i class="fa-solid fa-layer-group"></i>
                            Change MFO Parent
                          </button>
                        </li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                          <button
                            class="dropdown-item"
                            type="button"
                            data-bs-toggle="modal"
                            data-bs-target="#mfoEditor"
                            @click="addSubFunction(item)"
                          >
                            <i class="fa-solid fa-turn-down"></i>
                            Add Subfunction
                          </button>
                        </li>
                        <li><hr class="dropdown-divider" /></li>
                        <li>
                          <a
                            class="dropdown-item text-danger"
                            href="#"
                            data-bs-toggle="modal"
                            data-bs-target="#deleteConfirmation"
                            @click="deleteMfo(item.rating_scale_matrix_id)"
                          >
                            <i class="fa-solid fa-trash-can"></i>
                            Delete MFO/PAP
                          </a>
                        </li>
                      </ul>
                    </span>
                  </td>
                  <td
                    v-if="item.code"
                    :rowspan="item.rowspan"
                    :colspan="!item.success_indicator ? '9' : ''"
                    style="vertical-align: middle"
                  >
                    <span :style="set_text_indent(item.indent)">
                      {{ item.code + " " + item.function }}
                    </span>
                  </td>
                  <template v-if="item.success_indicator">
                    <td style="vertical-align: middle">
                      {{ item.success_indicator }}
                    </td>
                    <td>
                      <span
                        v-for="(
                          performance_measure, pf
                        ) in item.performance_measures"
                        :key="pf"
                      >
                        {{ performance_measure }}
                        <br
                          v-if="pf + 1 !== item.performance_measures.length"
                        />
                      </span>
                    </td>
                    <td>
                      <span v-for="(quality, q) in item.quality" :key="q">
                        <div v-if="item.quality[5 - q - 1]">
                          <b>{{ 5 - q }}</b> - {{ item.quality[5 - q - 1] }}
                          <br />
                        </div>
                      </span>
                    </td>
                    <td>
                      <span v-for="(efficiency, e) in item.efficiency" :key="e">
                        <div v-if="item.efficiency[5 - e - 1]">
                          <b>{{ 5 - e }}</b> - {{ item.efficiency[5 - e - 1] }}
                          <br />
                        </div>
                      </span>
                    </td>
                    <td>
                      <span v-for="(timeliness, t) in item.timeliness" :key="t">
                        <div v-if="item.timeliness[5 - t - 1]">
                          <b>{{ 5 - t }}</b> - {{ item.timeliness[5 - t - 1] }}
                          <br />
                        </div>
                      </span>
                    </td>
                    <td nowrap>
                      <div v-for="(incumbent, i) in item.incumbents" :key="i">
                        <a class="link-info" href="javascript:void(0)">{{
                          incumbent.full_name
                        }}</a>
                        <br v-if="i + 1 !== item.incumbents.length" />
                      </div>
                    </td>
                    <td style="vertical-align: middle">
                      <button
                        class="btn btn-sm text-success"
                        title="Edit success indicator"
                        data-bs-toggle="modal"
                        data-bs-target="#successIndicatorEditor"
                        @click="edit_success_indicator(item.id)"
                      >
                        <i class="fa-solid fa-pen-to-square text-success"></i>
                      </button>
                    </td>
                    <td style="vertical-align: middle">
                      <button
                        class="btn btn-sm text-danger"
                        title="Delete success indicator"
                        data-bs-toggle="modal"
                        data-bs-target="#deleteConfirmation"
                        @click="deleteSuccessIndicator(item.id)"
                      >
                        <!-- @click="add_success_indicator(item)" -->
                        <i class="fa-solid fa-eraser text-danger"></i>
                      </button>
                    </td>
                  </template>
                </tr>
              </tbody>
            </table>
            <form class="row g-3" @submit.prevent="submit_new_mfo()">
              <div class="col-auto">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Category Number:"
                  v-model="new_mfo.category"
                />
              </div>
              <div class="col-auto">
                <input
                  type="text"
                  class="form-control"
                  placeholder="MFO/PAP Title"
                  v-model="new_mfo.title"
                />
              </div>
              <div class="col-auto">
                <button type="submit" class="btn btn-primary">Add</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./Index.js"></script>