<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card shadow-sm">
          <div class="card-header">
            <h3>Performance Commitment and Review</h3>
          </div>
          <div class="card-body">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">
                  Signatories
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Core Functions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Support Functions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Strategic Functions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Submission</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboard",
  data() {
    return {
      user: this.$store.state.auth.user,
      items: [],
    };
  },
  mounted() {
    axios
      .get("/api/test")
      .then(({ data }) => {
        this.items = JSON.parse(JSON.stringify(data));
      })
      .catch(({ response: { data } }) => {
        console.log(data);
      });
  },
};
</script>