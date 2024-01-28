<script lang="js" setup>
definePageMeta({
  pageTransition: {
    name: "slide-right",
    mode: "out-in",
  }
});
</script>

<template>
  <div class="w-full min-h-[67vh] flex items-center justify-center">
    <Head> </Head>
    <title>BottleHub - Gambling on The Edge</title>
    <div class="hero-content max-w-full w-full">
      <div class="justify-center text-center md:max-w-2xl lg:max-w-6xl">
        <h2 class="font-bold text-2xl capitalize mb-5">
          Currently Work in Progress...
        </h2>
        <p>
          In the mean time you can check out the
          <nuxt-link to="/faucet" class="link">faucet</nuxt-link> to get test
          tokens as well as the
          <nuxt-link to="https://docs.bottlehub.xyz/introduction/getting-started" class="link" target="blank"
            >docs</nuxt-link
          >
          to learn more about the project. For more inquiries contact the team
          via
          <nuxt-link to="mailto:team@bottlehub.xyz" class="link"
            >team@bottlehub.xyz</nuxt-link
          >.
        </p>
      </div>
    </div>
  </div>
</template>
