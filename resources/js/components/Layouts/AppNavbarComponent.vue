<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link :to="{ name: 'dashboard' }" class="navbar-brand">
          <i class="fa-solid fa-tachograph-digital"></i>
          Online SPMS
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
          aria-controls="navbarScroll"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarScroll">
          <ul
            class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll"
            style="--bs-scroll-height: 100px"
          >
            <li class="nav-item">
              <router-link
                :to="{ name: 'dashboard' }"
                class="nav-link"
                aria-current="page"
              >
                <i class="fa-solid fa-house"></i>
                Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'rsm' }" class="nav-link">
                <i class="fas fa-tachometer-alt"></i>
                Performance Rating</router-link
              >
            </li>
            <li class="nav-item">
              <router-link :to="{ name: 'rsm' }" class="nav-link">
                <i class="fa-solid fa-scale-balanced"></i>
                Rating Scale Matrix</router-link
              >
            </li>
          </ul>
          <div class="ms-auto">
            <div class="dropdown">
              <button
                class="btn btn-secondary dropdown-toggle"
                type="button"
                id="dropdownMenuButton2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {{user.name}}
              </button>
              <ul
                class="dropdown-menu dropdown-menu-dark"
                aria-labelledby="dropdownMenuButton2"
              >
                <!-- <li><a class="dropdown-item active" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li> -->
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#" @click="logout()"><i class="fa-solid fa-arrow-right-from-bracket"></i> Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <main class="mt-3">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "dashboard-layout",
  data() {
    return {
      user: this.$store.state.auth.user,
    };
  },
  methods: {
    ...mapActions({
      signOut: "auth/logout",
    }),
    async logout() {
      await axios.post("/logout").then(({ data }) => {
        this.signOut();
        this.$router.push({ name: "login" });
      });
    },
    async get_user() {
      await axios.get("/api/user").then(({ data }) => {
        console.log(data);
        // this.signOut()
        // this.$router.push({name:"login"})
      });
    },
  },
};
</script>