<script setup lang="ts">
import Greetings from '@/components/GreetingsComponent.vue'
import WordCountComponent from '@/components/WordCountComponent.vue'
</script>

<template>
  <div class="wrapper">
    <div>
      <div class="logo-container">
        <img alt="Voxy logo" class="logo" src="./assets/voxy-logo.png" />
      </div>
      <Greetings />
    </div>
    <WordCountComponent />
  </div>
</template>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    padding: 0 2rem;
    grid-column-gap: 50px;
  }
}
</style>
