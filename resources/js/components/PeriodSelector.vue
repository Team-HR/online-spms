<template>
  <div>
    <div class="text-center m-5">
      <h1> <i :class=icon class="me-2"></i> {{ title }}</h1>
    </div>
    <table
      class="table table-sm table-bordered text-center mx-auto"
      style="width: 800px"
    >
      <thead class="table-primary">
        <tr>
          <th scope="col">
            1st Period <br />
            <!-- January - June -->
          </th>
          <th scope="col">
            2nd Period <br />
            <!-- July - December -->
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(period, p) in periods" :key="p">
          <td>
            <router-link
              :to="{
                path:
                  path +'/year/' +
                  period.year +
                  '/period/' +
                  period.first.period,
              }"
              class="btn btn-light px-5"
              :class="period.first.is_current == 1 ? 'text-success' : ''"
            >
              <i class="fa-solid fa-folder me-2"></i> January - June,
              {{ period.year }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                path:
                  path +'/year/' +
                  period.year +
                  '/period/' +
                  period.second.period,
              }"
              class="btn btn-light px-5"
              :class="period.second.is_current == 1 ? 'text-primary' : ''"
            >
              <i class="fa-solid fa-folder me-2"></i> July - December,
              {{ period.year }}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "PeriodSelector",
  props: {
    title: String,
    path: String,
    icon: String
  },
  data() {
    return {
      periods: [],
    };
  },
  methods: {
    async getPeriods() {
      await axios({
        method: "get",
        url: "api/rsm/getRatingScaleMatrixPeriods",
      }).then(({ data }) => {
        //  console.log(data);
        this.periods = data;
      });
    },
  },
  mounted() {
    this.getPeriods();
  },
};
</script>

