<template>
  <dialog id="waitlist" class="modal">
    <div class="modal-box bg-slate-950">
      <div class="w-full justify-center text-center">
        <h2 class="font-bold text-2xl">
          Welcome to the front lines of the revolution.
        </h2>
        <form ref="waitlist" action="" method="post" class="">
          <input
            v-model="email"
            type="text"
            name="email"
            placeholder="Email"
            class="join-item input input-bordered input-primary w-full rounded-2xl mt-5"
          />
          <button
            type="submit"
            class="join-item btn btn-primary w-full rounded-2xl mt-6"
            @click.once="submitEmail"
            @click.prevent
            @keyup.enter="submitEmail"
          >
            Submit
          </button>
          <ContactFeedback
            :formFeedback="(formFeedback as string)"
            :isLoading="isLoading"
          />
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
type FormFeedbackType =
  | "incomplete"
  | "consent"
  | "invalid"
  | "error"
  | "success"
  | null;

// proxy type
type ProxyType = {
  status: number;
  message: string;
  data: {
    error?: string;
    id?: {
      InsertedID: string;
    };
  };
};

// refs
const email = ref("");
const consent = ref(true);
const isLoading = ref(false);
const formFeedback: Ref<FormFeedbackType> = ref(null);
const success = ref(true);

// email submit function
const submitEmail = async () => {
  isLoading.value = true;
  formFeedback.value = null;

  email.value = email.value.trim();

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  if (!email.value.trim()) {
    formFeedback.value = "incomplete";
    isLoading.value = false;
    return;
  } else if (email.value && !regex.test(email.value)) {
    formFeedback.value = "invalid";
    success.value = false;
    isLoading.value = false;
    return;
  } else if (!consent.value) {
    formFeedback.value = "consent";
    success.value = false;
    isLoading.value = false;
    return;
  } else {
    // wait 4 seconds then submit
    setTimeout(async () => {
      try {
        const { data: proxy } = await useFetch(
          "https://api.bottlehub.xyz/add",
          {
            method: "post",
            body: { address: email },
          }
        );
        const data: Ref<ProxyType> = ref(proxy) as Ref<ProxyType>;

        email.value = "";
        success.value = true;
        isLoading.value = false;
        data.value.message == "error"
          ? (formFeedback.value = "error")
          : (formFeedback.value = "success");
      } catch (error) {
        success.value = false;
        isLoading.value = false;
        formFeedback.value = "error";
      }
    }, 4000);
  }
};
</script>
