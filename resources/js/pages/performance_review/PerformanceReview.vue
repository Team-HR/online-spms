<template>
  <div class="container">
    <div class="card border-light">
      <div class="card-header">
        <h3>Performance Commitment and Review</h3>
        <h4>
          <span v-if="period == 1">January - June</span
          ><span v-else-if="period == 2">July - December</span> {{ year }}
        </h4>
      </div>
      <div class="card-body">
        <ul class="nav nav-tabs">
          <li
            class="nav-item"
            v-for="(step, s) in $store.state.pcr.steps"
            :key="s"
            @click="$store.dispatch('pcr/setActiveTab',s)"
          >
            <button
              :class="step.isActive ? 'active' : ''"
              class="text-dark nav-link"
            >
              <i :class="step.icon"></i>
              {{ step.title }}
              <span class="badge rounded-pill bg-secondary" v-if="step.isDone === false">Incomplete</span>
              <span class="badge rounded-pill bg-primary" v-else-if="step.isDone === true">Done</span>
            </button>
          </li>
        </ul>

        <div class="card mt-2">
          <div class="card-body">
            <h4>{{ $store.getters['pcr/activeTab'].title }}</h4>
            <p>
              {{$store.getters['pcr/activeTab'].desc}} 
            </p>
            {{$store.getters['pcr/activeTab'].tabName}}
            <Status v-if="$store.getters['pcr/activeTab'].tabName == 'status'"/>
            <SignatoriesEditor v-else-if="$store.getters['pcr/activeTab'].tabName == 'signatories'" />

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./PerformanceReview.js"></script>