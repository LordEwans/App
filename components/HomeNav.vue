<template>
  <div class="drawer drawer-end">
    <input id="my-drawer-4" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex justify-center">
      <header class="navbar py-[.2em] will-change-transform top-0 w-[96%%]">
        <div class="navbar-start ml-2 md:ml-6 block text-base">
          <a
            href="/"
            class="btn bg-transparent hover:bg-transparent min-h-0 h-0 p-0 border-transparent hover:border-transparent"
          >
            <Logo />
          </a>
        </div>
        <nav class="lg:flex justify-self-center hidden navbar-center">
          <ul class="flex">
            <li class="partials">
              <a href="#features" class="partials">Features</a>
            </li>
            <li class="partials">
              <a href="#ecosystem" class="partials">Ecosystem</a>
            </li>
            <li class="partials">
              <a href="#trading" class="partials">Trading</a>
            </li>
          </ul>
          <!-- <button>
        <img src="assets/img/animated/day.svg" alt="Default" />
      </button> -->
        </nav>
        <div class="justify-self-end hidden lg:flex navbar-end">
          <a href="/faucets"
            ><label
              for="waitlist"
              class="btn btn-outline text-xs mx-6 btn-primary"
              >Faucets</label
            >
          </a>
        </div>
        <div class="max-lg:navbar-end">
          <label
            for="my-drawer-4"
            class="drawer-button btn btn-ghost text-xs btn-primary lg:hidden"
            style="--tw-bg-opacity: 0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5 fill-[hsl(76 100% 50%)]"
              viewBox="0 0 24 24"
              stroke="hsl(76 100% 50%)"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
        </div>
      </header>
    </div>

    <div class="drawer-side z-10 lg:hidden">
      <label
        for="my-drawer-4"
        aria-label="close sidebar"
        class="drawer-overlay"
      />
      <ul
        class="menu p-4 w-72 md:w-80 min-h-full bg-slate-900 text-base-content hover:bg-slate-800"
      >
        <li class="partials">
          <a href="#features" class="partials">Features</a>
        </li>
        <li class="partials">
          <a href="#ecosystem" class="partials">Ecosystem</a>
        </li>
        <li class="partials">
          <a href="#trading" class="partials">Trading</a>
        </li>
        <a href="/faucets">
          <label for="waitlist" class="btn text-xs mt-9 mx-6 btn-primary"
            >faucets</label
          >
        </a>
      </ul>
    </div>
  </div>
</template>

<style>
li.partials {
  @apply inline mx-5 font-semibold;
}
.partials {
  @apply inline-block uppercase font-bold text-xs text-[oklch(var(--p))];
}
.btn {
  @apply rounded-2xl;
}
header {
  @apply rounded-3xl mt-4 w-[96%] border-t border-[hsl(76,100%,50%)] border-opacity-40;
}
</style>
