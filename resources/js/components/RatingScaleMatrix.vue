<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="card shadow-sm">
          <div class="card-header">
            <h3>Rating Scale Matrix</h3>
          </div>
          <div class="card-body">
            <p class="mb-0">Rating Scale Matrix</p>
            <p>{{ items }}</p>
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
      items: [],
    };
  },
  methods: {
    async getItems() {
      await axios
        .get("/api/rsm", {
          params: {
            period: 1,
            year: 2022,
          },
        })
        .then(({ data }) => {
          this.items = JSON.parse(JSON.stringify(data));
        })
        .catch(({ response: { data } }) => {
          alert("ERROR FETCHING DATA!");
        });
    },
  },
  mounted() {
    this.getItems();
  },
};
</script>