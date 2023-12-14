<template>
  <Head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" />
    <link
      href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,700;1,400&display=swap"
      rel="stylesheet"
    />
  </Head>
  <title>Faucet - Test Tokens for BottleHub</title>
  <div class="lg:flex lg:justify-center lg:items-center min-h-screen">
    <div class="lg:container">
      <Navigation />
      <div class="w-full min-h-[67vh] flex items-center justify-center">
        <div class="hero-content max-w-full w-full">
          <div class="text-center">
            <form
              method="post"
              class="join join-vertical md:join-horizontal w-full rounded-2xl"
            >
              <input
                v-model="address"
                type="text"
                name="address"
                placeholder="Address"
                class="join-item input input-bordered input-primary rounded-3xl w-full md:w-[80%]"
              />
              <button
                type="submit"
                class="join-item btn btn-primary rounded-3xl w-full md:w-[20%]"
                @click.prevent="submitAddress"
              >
                Get Token
              </button>
            </form>
            <FaucetFeedback
              :formFeedback="(formFeedback as string)"
              :url="url"
            />
            <div class="mt-8 md:mt-16">
              <div class="md:max-w-2xl lg:max-w-6xl">
                <h2 class="capitalize text-2xl md:text-4xl font-extrabold">
                  FAQs
                </h2>
                <div class="join join-vertical rounded-2xl">
                  <div class="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" :checked="true" />
                    <div class="collapse-title text-xl font-medium">
                      How do I add the token?
                    </div>
                    <p class="collapse-content">
                      After requesting from the faucet, just follow this
                      instructions
                      <a href="https://medium.com" class="link">here</a> to add
                      the token to your wallet.
                    </p>
                  </div>
                  <div class="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div class="collapse-title text-xl font-medium">
                      Can I request from the faucet again?
                    </div>
                    <p class="collapse-content">
                      You can only get test tokens once a day for every wallet.
                    </p>
                  </div>
                  <div class="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div class="collapse-title text-xl font-medium">
                      What's next for me?
                    </div>
                    <p class="collapse-content">
                      We're currently building the alpha version of the app, so
                      wait tight. Until then just join the waitlist if you
                      haven't already to be notified of the launch.
                    </p>
                  </div>
                  <div class="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div class="collapse-title text-xl font-medium">
                      Why can't I find my tokens anymore?
                    </div>
                    <p class="collapse-content">
                      Please refer to the add token faq and verify if the token
                      is added to your wallet.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<style>
.collapse {
  @apply bg-slate-950 join-item;
}
</style>

<script setup lang="ts">
import { ref } from "vue";
type FormFeedbackType =
  | "incomplete"
  | "consent"
  | "invalid"
  | "error"
  | "success"
  | null;

const address = ref("");
const consent = ref(true);
const isLoading = ref(false);
const formFeedback: Ref<FormFeedbackType> = ref(null);
const url = ref("");
const success = ref(true);

const data = ref(null);

const submitAddress = async () => {
  isLoading.value = true;
  formFeedback.value = null;
  type SendData = {
    sendData: {
      url: string;
      message: string;
    };
  };

  if (!address.value.trim()) {
    formFeedback.value = "incomplete";
    isLoading.value = false;
    return;
  }

  /* const regex = /^[A-Z0-9]$/i;
  if (address.value && !regex.test(address.value)) {
    formFeedback.value = "invalid";
    success.value = false;
    isLoading.value = false;
    return;
  }*/

  if (!consent.value) {
    formFeedback.value = "consent";
    success.value = false;
    isLoading.value = false;
    return;
  }
  setTimeout(async () => {
    console.log("Hey");
    success.value = true;
    isLoading.value = false;
    console.log(address.value);
    const { data: sendData } = await useFetch("/api/transfer", {
      method: "post",
      body: { address: address.value },
    });

    const data: Ref<SendData> = ref(sendData) as Ref<SendData>;
    formFeedback.value = "success";
    url.value = data.value.sendData.url;
    address.value = "";
  }, 4000);
};
</script>
