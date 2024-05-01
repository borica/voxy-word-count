<script setup lang="ts">
import Greetings from '@/components/GreetingsComponent.vue'
import WordCountComponent from '@/components/WordCountComponent.vue'
</script>

<template>
  <div class="greetings">
    <div>
      <div class="logo-container">
        <img alt="Voxy logo" class="logo" src="./assets/voxy-logo.png" />
      </div>
      <Greetings />
    </div>
  </div>
  <WordCountComponent />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo-container {
  display: flex;
  justify-content: center;
}

.logo {
  display: block;
  margin: 0 auto;
}

@media (min-width: 1024px) {
  .greetings {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  greetings {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
