<template>
  <div class="mt-2">
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
        <!-- <EmployeeSelector @selectedEmployee="showSelected('sup')" /> -->
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label"></label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>
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
        <button class="btn btn-primary" @click="showSelecteds()">
          Show Selecteds
        </button>
      </div>
    </div>
    <!-- Form ends here -->
  </div>
</template>

<script src="./SignatoriesEditor.js"></script>


