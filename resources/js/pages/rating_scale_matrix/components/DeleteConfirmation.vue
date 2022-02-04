<template>
  <div class="modal fade" tabindex="-1">
    <div class="modal-dialog modal-sm">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Confirm Deletion</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <p>Are you sure you want to delete {{ text }}?</p>
          <form id="confirmDeleteForm" @submit.prevent="submitDelete()"></form>
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
            form="confirmDeleteForm"
            type="submit"
            class="btn btn-danger"
            data-bs-dismiss="modal"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteConfirmation",
  props: {
    text: String,
    success_indicator_id: Number, //Success Indicator id
    rating_scale_matrix_id: Number, //MFO id
  },
  data() {
    return {};
  },
  watch: {},
  methods: {
    submitDelete() {
      // console.log({
      //   success_indicator_id: this.success_indicator_id,
      //   rating_scale_matrix_id: this.rating_scale_matrix_id
      // });
      axios({
        method: "post",
        url: "/api/rsm/delete",
        data: {
          success_indicator_id: this.success_indicator_id,
          rating_scale_matrix_id: this.rating_scale_matrix_id,
        },
      }).then(({ data }) => {
        console.log(data);
        this.$emit("deleteConfirmed");
      });
    },
  },
  mounted() {},
};
</script>