<template>
  <div class="flex flex-col items-center mx-4 mb-8">
    <img :src="img" :alt="name" class="w-32 rounded-3xl mb-4" />
    <p class="font-bold text-lg">{{ name }}</p>
    <p class="font-light text-sm">{{ role }}</p>

    <div class="grid grid-flow-col gap-4 text-[var(--text)] mt-2 text-xl">
      <a :href="x" target="_blank" v-if="x"><font-awesome-icon icon="fa-brands fa-x-twitter" /></a>
      <a :href="linkedin" target="_blank" v-if="linkedin"><font-awesome-icon icon="fa-brands fa-linkedin" /></a>
    </div>
  </div>
</template>
<script setup lang="ts">
defineProps({
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  x: {
    type: String,
  },
  linkedin: {
    type: String,
  },
});
</script>
