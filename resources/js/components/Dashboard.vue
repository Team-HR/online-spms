<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card shadow-sm">
          <div class="card-header">
            <h3>Dashboard</h3>
          </div>
          <div class="card-body">
            <!-- <p class="mb-0">
              You are logged in as <b>{{ user.email }}</b>
            </p> -->
            <ul>
                <li v-for="(item, i) in items" :key="i">
                    {{item}}
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
      items: []
    };
  },
  mounted() {
    axios.get("/api/test")
      .then(({ data }) => {
        this.items = JSON.parse(JSON.stringify(data))
      })
      .catch(({ response: { data } }) => {
        console.log(data);
      });
  },
};
</script>