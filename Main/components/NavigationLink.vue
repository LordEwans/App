<template>
  <CustomLink :to="to">{{ title }}</CustomLink>
</template>
<script setup lang="ts">
const CustomLink = defineNuxtLink({
  componentName: "CustomLink",
  prefetchedClass: "hovered-link",
  activeClass: "font-bold active-link underline",
  exactActiveClass: "font-bold active-link",
});
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