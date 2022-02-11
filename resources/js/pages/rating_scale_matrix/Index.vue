<template>
  <div class="container">
    <div class="text-center">
      <h1>Rating Scale Matrix</h1>
    </div>
    <table class="table text-center">
      <thead>
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
            <!-- <a :href="'rsm/period?year='+period.year+'&period=1'" class="btn px-5" :class="period.first.is_current==1?'btn-success':'btn-secondary'">
              January - June, {{ period.year }}
            </a> -->
            <router-link
              :to="{
                path:
                  'rsm/period/year/' +
                  period.year +
                  '/period/' +
                  period.first.period,
              }"
              class="btn px-5"
              :class="
                period.first.is_current == 1 ? 'btn-success' : 'btn-secondary'
              "
            >
              January - June, {{ period.year }}
            </router-link>
          </td>
          <td>
            <router-link
              :to="{
                path:
                  'rsm/period/year/' +
                  period.year +
                  '/period/' +
                  period.second.period,
              }"
              class="btn px-5"
              :class="
                period.second.is_current == 1 ? 'btn-success' : 'btn-secondary'
              "
            >
              July - December, {{ period.year }}
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "Index",
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

