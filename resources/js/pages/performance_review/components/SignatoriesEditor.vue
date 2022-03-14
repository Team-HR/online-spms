<template>
  <div class="container">
    <div class="card mb-2">
      <div class="card-body">
        <h1 class="mb-1">
          Performance Commitments and Review
          <small class="text-muted">/Signatories</small>
        </h1>
        <h5 class="text-secondary">
          <span v-if="period == 1">January-June</span>
          <span v-else>July-December</span>
          {{ year }}
        </h5>
      </div>
    </div>

    <!-- Form starts here -->

    <div class="card">
      <div class="card-body">
        <!-- employee type start -->
        <div class="h4">Employee Type:</div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label class="form-check-label" for="flexRadioDefault1">
            NGA Employee
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label class="form-check-label" for="flexRadioDefault2">
            LGU Employee
          </label>
        </div>
        <hr />
        <!-- employee type end -->
        <!-- form type start -->
        <div class="h4">Form Type:</div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="formType"
            id="ipcrType"
          />
          <label class="form-check-label" for="ipcrType">
            IPCR (Individual)
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="formType"
            id="spcrType"
          />
          <label class="form-check-label" for="spcrType">
            SPCR (Section Head)
          </label>
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="radio"
            name="formType"
            id="dpcrType"
          />
          <label class="form-check-label" for="dpcrType">
            DPCR (Department Head)
          </label>
        </div>
        <!-- form type end -->
        <!-- Immediate Supervisor start -->
        <hr />
        <div class="h4">Immediate Supervisor:</div>
        <EmployeeSelector @selectedEmployee="showSelected('sup')" />
        <!-- Immediate Supervisor end -->
        <!-- Department Head start -->
        <hr />
        <div class="h4">Department Head:</div>
        {{ departmentHead
        }}<EmployeeSelector @selectedEmployee="showSelected('dh')" />
        <!-- Department Head end -->
        <!-- Head of Agency start -->
        <hr />
        <div class="h4">Head of Agency:</div>
        <!-- <EmployeeSelector /> -->
        <!-- Head of Agency end -->
        <button class="btn btn-primary" @click="showSelecteds()">Show Selecteds</button>
      </div>


    </div>
    <!-- Form ends here -->
  </div>
</template>

<script src="./SignatoriesEditor.js"></script>


