<template>
  <CustomLink :to="to">{{ title }}</CustomLink>
</template>
<script setup lang="ts">
defineProps({
  to: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>