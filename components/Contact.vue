<template>
  <dialog id="waitlist" class="modal">
    <div class="modal-box bg-slate-950">
      <div class="w-full justify-center text-center">
        <h1 class="font-bold text-2xl">
          Welcome to the front lines of the revolution.
        </h1>
        <form action="" method="post" class="">
          <input
            v-model="state.email"
            type="text"
            name="email"
            placeholder="Email"
            class="join-item input input-bordered input-primary w-full rounded-2xl mt-5"
          />
          <button
            type="submit"
            class="join-item btn btn-primary w-full rounded-2xl mt-6"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
    <form method="dialog" class="modal-backdrop">
      <button />
    </form>
  </dialog>
</template>

<script setup lang="ts">
import { ref } from "vue";

const state = reactive({
  email: undefined,
});

const { data: sendData } = await useFetch("mail-list-url", {
  method: "post",
  body: { email: state.email },
});

const info = ref(sendData);
</script>
