<script lang="js" setup>
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  }
});
const showWaitlist =() => {
  waitlist.showModal();
}
</script>
<template>
  <div class="hero w-full min-h-[65vh] md:min-h-[67vh]">
    <Head>
      <meta
        name="description"
        content="Unparalleled Competitive GambleFi and GameFi Ecosystem Powered by the Metis Blockchain Platform."
      />
      <link rel="canonical" href="https://bottlehub.xyz" />
    </Head>
    <title>BottleHub - Gambling on The Edge</title>
    <div class="hero-content max-w-full w-full">
      <div class="text-center flex justify-center">
        <div class="md:max-w-2xl lg:max-w-6xl align-top">
          <div class="w-full mb-12 md:mb-16">
            <h1
              class="text-2xl mb-2 lg:mb-9 md:text-[clamp(2rem,4vw,4.2rem)] leading-[1.1] capitalize"
            >
              Unparalleled competitive gambling
            </h1>
            <h2
              class="capitalize text-3xl md:text-[clamp(2.7rem,4vw,4rem)] leading-[1.1] font-extrabold"
            >
              Experience the bleeding edge
            </h2>
          </div>
          <div class="">
            <button class="btn mx-6 btn-primary" @click="showWaitlist()">
              Join Waitlist
            </button>
            <nuxt-link
              to="https://docs.bottlehub.xyz/introduction/getting-started"
              target="blank"
              class="btn btn-ghost text-[oklch(var(--p))] hover:bg-transparent hover:underline glowing-link"
              >Learn More</nuxt-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.btn {
  @apply rounded-2xl;
}
</style>
