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
        <tr v-for="n in 3" :key="n">
          <th>
            <div class="d-grid gap-2">
              <button v-if="n == 2" class="btn px-5">
                <b class="text-success">January - June, {{ "202" + n }}</b>
                <i class="text-success">(Current)</i>
              </button>
              <button v-else class="btn px-5">
                January - June, {{ "202" + n }}
              </button>
            </div>
          </th>
          <td>
            <button class="btn px-5">
              July - December, {{ "202" + n }}
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
