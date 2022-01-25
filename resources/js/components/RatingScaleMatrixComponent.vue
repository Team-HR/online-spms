<template>
  <div class="container-fluid">
    <div
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      class="modal fade"
      id="editMfoModal"
      tabindex="-1"
    >
      <div class="modal-dialog modal-lg">
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
            <form
              id="form_edit_mfo"
              class="row g-2"
              @submit.prevent="save_edit_mfo()"
            >
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
            <button form="form_edit_mfo" type="submit" class="btn btn-primary">
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card shadow-sm">
          <div class="card-header">
            <h3>Rating Scale Matrix</h3>
          </div>
          <div class="card-body">
            <p class="mb-0">Rating Scale Matrix</p>
            <!-- <p>{{ items }}</p> -->
            <table class="table table-bordered">
              <thead>
                <tr class="text-center">
                  <th scope="col"></th>
                  <!-- <th scope="col">CODE</th> -->
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
                  <td v-if="item.code" :rowspan="item.rowspan"></td>
                  <td
                    v-if="item.code"
                    :rowspan="item.rowspan"
                    :colspan="!item.success_indicator ? '9' : ''"
                    style="vertical-align: middle"
                  >
                    <a
                      class="btn btn-outline-success btn-sm"
                      data-bs-toggle="modal"
                      data-bs-target="#editMfoModal"
                      href="javascript:void(0)"
                      :style="set_text_indent(item.order_number_mfo)"
                      @click="edit_mfo(item)"
                      ><i class="fa-solid fa-pen-to-square"></i> Edit</a
                    >
                    {{ item.code + " " + item.function }}
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
                        <b>{{ quality.score }}</b> - {{ quality.desc }}
                        <br v-if="q + 1 !== item.quality.length" />
                      </span>
                    </td>
                    <td>
                      <span v-for="(efficiency, e) in item.efficiency" :key="e">
                        <b>{{ efficiency.score }}</b> - {{ efficiency.desc }}
                        <br v-if="e + 1 !== item.efficiency.length" />
                      </span>
                    </td>
                    <td>
                      <span v-for="(timeliness, t) in item.timeliness" :key="t">
                        <b>{{ timeliness.score }}</b> - {{ timeliness.desc }}
                        <br v-if="t + 1 !== item.timeliness.length" />
                      </span>
                    </td>
                    <td>
                      <span v-for="(incumbent, i) in item.incumbents" :key="i">
                        <a href="javascript:void(0)">{{
                          incumbent.full_name
                        }}</a>
                        <br v-if="i + 1 !== item.incumbents.length" />
                      </span>
                    </td>
                    <td>
                      <a
                        class="btn btn-outline-success btn-sm"
                        href="javascript:void(0)"
                        title="Edit this success indicator"
                        ><i class="fa-solid fa-pen-to-square"></i> Edit</a
                      >
                    </td>
                    <td>
                      <a
                        class="btn btn-outline-danger btn-sm"
                        href="javascript:void(0)"
                        ><i class="fa-solid fa-eraser"></i> Delete</a
                      >
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

<script>
export default {
  name: "ratingscalematrix",
  data() {
    return {
      period: 1,
      year: 2022,
      new_mfo: {
        category: "",
        title: "",
      },
      items: [],
      edit_mfo_item: {},
    };
  },
  methods: {
    edit_mfo(item) {
      var item = JSON.parse(JSON.stringify(item));
      this.edit_mfo_item = {
        id: item.id,
        code: item.code,
        function: item.function,
      };
      console.log(this.edit_mfo_item);
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
          $("#editMfoModal").modal("hide");
          $(".modal-backdrop").remove();
          this.getItems().then(() => {});
        })
        .catch(({ response: { data } }) => {
          alert(data.message);
          console.log(data);
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
          console.log(data);
        });
    },

    set_text_indent(order_number_mfo) {
      var tabs = "";
      if (!order_number_mfo) return tabs;
      tabs = "margin-left:" + 15 * order_number_mfo + "px;";
      return tabs;
    },
  },
  mounted() {
    this.getItems();
  },
};
</script>