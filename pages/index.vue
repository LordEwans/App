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
  <title>BottleHub - Gambling on The Edge</title>
  <div class="body animate-border">
    <div class="lg:flex lg:justify-center lg:items-center min-h-screen">
      <div class="lg:container">
        <Navigation />
        <div class="hero w-full min-h-[67vh]">
          <div class="hero-content max-w-full w-full">
            <div class="text-center flex justify-center">
              <div class="md:max-w-2xl lg:max-w-6xl">
                <h1
                  class="text-2xl mb-6 lg:mb-9 md:text-[clamp(2rem,4vw,4.2rem)] leading-[1.1] capitalize"
                >
                  Unparalleled competitive gambling
                </h1>
                <h2
                  class="capitalize text-2xl md:text-[clamp(2.7rem,4vw,4rem)] font-extrabold"
                >
                  Experience the bleeding edge
                </h2>
                <div class="">
                  <button
                    class="btn mt-9 mx-6 btn-primary"
                    onclick="waitlist.showModal()"
                  >
                    join waitlist
                  </button>
                  <a
                    href="https://medium.com/"
                    target="_blank"
                    class="btn btn-ghost text-[oklch(var(--p))] hover:bg-transparent hover:underline"
                    >Learn More</a
                  >
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

<style>
.btn {
  @apply rounded-2xl;
}
</style>
