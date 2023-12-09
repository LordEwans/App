<template>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,700;1,400&display=swap"
    rel="stylesheet"
  />
  <title>BottleHub - Gambling on The Edge</title>

  <div class="body animate-border">
    <div class="lg:flex lg:justify-center lg:items-center min-h-screen">
      <div class="lg:container">
        <FaucetNav />
        <div class="w-full min-h-[67vh]">
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
                  @click="submitAddress"
                >
                  Get Token
                </button>
              </form>
              <div class="h-[30vh]">
                <div class="md:max-w-2xl lg:max-w-6xl">
                  <h2 class="capitalize md:text-4xl font-extrabold">FAQs</h2>
                  <div class="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" :checked="true" />
                    <div class="collapse-title text-xl font-medium">
                      How do I add the token?
                    </div>
                    <div class="collapse-content">
                      <p>
                        After requesting from the faucet, just follow this
                        instructions here to add the token to your wallet using
                        0x153dE0bA5B0DdEb8817C4bc2f6Afd201ae391c48.
                      </p>
                    </div>
                  </div>
                  <div class="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div class="collapse-title text-xl font-medium">
                      Can I request from the faucet again?
                    </div>
                    <div class="collapse-content">
                      <p>
                        You can only get test tokens once for every wallet but
                        after the alpha, we'll open it to be free flowing.
                      </p>
                    </div>
                  </div>
                  <div class="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div class="collapse-title text-xl font-medium">
                      What's next for me?
                    </div>
                    <div class="collapse-content">
                      <p>
                        We're currently building the alpha version of the app,
                        so wait tight. Until then just join the waitlist if you
                        haven't already to be notified of the launch.
                      </p>
                    </div>
                  </div>
                  <div class="collapse collapse-arrow bg-base-200">
                    <input type="radio" name="my-accordion-2" />
                    <div class="collapse-title text-xl font-medium">
                      Why can't I find my tokens anymore?
                    </div>
                    <div class="collapse-content">
                      <p>
                        Please refer to the add token faq and verify if the
                        token is added to your wallet.
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
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const address = ref("");

const data = ref(null);
const submitAddress = async () => {
  const { data: sendData } = await useFetch("/api/transfer", {
    method: "post",
    body: { address: address },
  });
};
</script>
