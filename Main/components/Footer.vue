<script setup>
</script>

<template>
  <div class="flex justify-center">
    <footer
      class="footer footer-center py-8 px-10 w-[96%] rounded-3xl border-b text-primary"
    >
      <nav>
        <div class="grid grid-flow-col gap-6 text-[var(--text)] text-2xl">
          <a href="https://x.com/bottlehubxyz" target="_blank">
            <font-awesome-icon icon="fa-brands fa-x-twitter" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCS_jSn_dF42NslgCwQn3CNg"
            target="_blank"
          >
            <font-awesome-icon icon="fa-brands fa-youtube" />
          </a>
          <a href="https://discord.gg/Fpv8DR3Jey" target="_blank">
            <font-awesome-icon icon="fa-brands fa-discord" />
          </a>
        </div>
      </nav>
      <aside
        class="flex max-lg:flex-col max-lg:items-center w-full text-xs md:text-sm justify-between"
      >
        <p class="font-bold">
          BottleHub ·
          <nuxt-link
            to="https://metis.io"
            target="blank"
            class="text-[oklch(var(--p))] hover:bg-transparent hovered-link"
            >Powered by Metis</nuxt-link
          ><br />
        </p>
        <p class="">Copyright © 2024 - All right reserved</p>
      </aside>
    </footer>
  </div>
</template>

<style>
footer {
  @apply rounded-3xl my-4 w-[96%] border-b border-[var(--border-color)] border-opacity-60;
}
</style>
