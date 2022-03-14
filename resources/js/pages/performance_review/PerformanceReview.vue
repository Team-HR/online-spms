<template>
  <div class="container">
    <div class="card mb-2">
      <div class="card-body">
        <h1 class="mb-1">Performance Commitments and Review</h1>
        <h5 class="text-secondary">
          <span v-if="period == 1">January-June</span>
          <span v-else>July-December</span>
          {{ year }}
        </h5>
      </div>
    </div>

    <ol class="list-group list-group-numbered">
      <li
        v-for="(step, s) in steps" :key="s"
        class="list-group-item d-flex justify-content-between align-items-start"
      >
        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ step.title }}</div>
          <p class="mb-1">
            {{ step.desc }}
          </p>
          <router-link :to="{ path: step.href }" class="btn btn-sm btn-primary" >
                <i :class="step.hrefIcon" class="me-2"></i> {{ step.buttonName }}
          </router-link>
        </div>
        <span class="badge bg-warning rounded-pill"> {{ step.status }} </span>
      </li>
    </ol>
  </div>
</template>

<script src="./PerformanceReview.js"></script>