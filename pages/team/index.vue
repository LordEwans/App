<template>
  <div class="w-full min-h-[67vh] flex items-center justify-center">
    <Head> </Head>
    <title>Team - Here's To Those That Brought You BottleHub</title>
    <div class="hero-content max-w-full w-full">
      <div class="w-full justify-center text-center">
        <h2 class="font-bold text-2xl capitalize mb-5">
          Currently Work in Progress...
        </h2>
        <p>
          In the mean time you can check out the
          <nuxt-link href="/faucet" class="link">faucet</nuxt-link> to get test
          tokens as well as the
          <nuxt-link href="/documentation" class="link">docs</nuxt-link> to
          learn more about the project.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="js" setup>
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  }
});
</script>
