<script lang="ts" setup>
const props = defineProps({
  formFeedback: String,
  isLoading: Boolean,
});
</script>

<template>
  <div
    v-if="formFeedback === 'error'"
    class="text-white w-full block p-3 mt-4 bg-red-500"
  >
    There was an error processing your request.
  </div>

  <div
    v-else-if="formFeedback === 'success'"
    class="text-white w-full block p-3 mt-4 bg-green-500"
  >
    Thanks for signing up!
  </div>

  <div
    v-else-if="isLoading"
    class="text-white w-full block p-3 mt-4 bg-blue-500"
  >
    <span class="loading loading-infinity loading-md"></span>
  </div>

  <div
    v-else-if="formFeedback === 'incomplete'"
    class="text-white w-full block p-3 mt-4 bg-red-500"
  >
    Please complete all required fields.
  </div>

  <div
    v-else-if="formFeedback === 'invalid'"
    class="text-white w-full block p-3 mt-4 bg-red-500"
  >
    Please enter a valid email address.
  </div>

  <div
    v-else-if="formFeedback === 'consent'"
    class="text-white w-full block p-3 mt-4 bg-red-500"
  >
    Please agree to terms and conditions.
  </div>
</template>

<style>
div {
  @apply rounded;
}
</style>
