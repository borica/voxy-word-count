<template>
  <div class="greetings">
    <h1 class="purple">Word Count Challenge!</h1>
    <h3>If you've got some words in need to be counted, i got you covered!</h3>
  </div>
  <div class="made-with-love">
    Made with love by <a href="http://www.borica.com.br" target="_blank">Tiago Boriça</a> for Voxy
    <Heart class="heart" />
  </div>
</template>

<script setup lang="ts">
import Heart from '@/components/icons/Heart.vue'
</script>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}
.greetings h1,
.greetings h3 {
  text-align: center;
}

.made-with-love {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.heart {
  margin-left: 0.3em;
  width: 20px;
  height: auto;
}
</style>
