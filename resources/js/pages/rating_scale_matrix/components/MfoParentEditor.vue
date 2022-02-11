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
          <h5 class="modal-title">
            <i class="fas fa-layer-group"></i>
            <!-- {{ mfo.code }}
            {{ mfo.function }} -->
            <!-- <i class="text-success">(Change Parent)</i> -->
            Change MFO/PAP Parent
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <table class="table">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(mfo, m) in mfoParents" :key="m">
                <td>
                  <button v-if="!mfo.disabled" class="btn btn-info ">Move here</button>
                </td>
                <td>
                  <span :style="'margin-left:'+(mfo.indent*15)+'px;'">{{ mfo.code }} {{mfo.function}}</span>
                </td>
              </tr>
            </tbody>
          </table>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "MfoParentEditor",
  props: {
    mfo: Object,
    mfos: Array,
    year: String,
    period: String,
  },
  data() {
    return {
      el: null,
      mfoParents: [],
    };
  },
  watch: {},
  methods: {
    getMfoParents() {
      // this.mfoParents = []
      // this.mfos.forEach(mfo => {
      //   if (mfo.code) {
      //     this.mfoParents.push(mfo) 
      //   }
      // });
      // console.log(this.mfoParents);
      axios.post('/api/rsm/getMfoParents',{
        mfoIdToTransfer: this.mfo.rating_scale_matrix_id,
        year: this.year,
        period: this.period
      })
      .then(({data}) => {
        console.log('getMfoParents:',data)
        this.mfoParents = data
      })
      .catch(err => {
        console.error(err); 
      })

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
    this.el.addEventListener("shown.bs.modal", (event) => {
      this.getMfoParents();
      // console.log(event);
    });

    /* 
        everytime the modal hides the data are cleared!
    */
    this.el.addEventListener("hidden.bs.modal", (event) => {
      this.code = "";
      this.mfoTitle = "";
    });
  },
};
</script>