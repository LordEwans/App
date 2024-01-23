<template>
  <div class="w-full min-h-[67vh] flex items-center justify-center">
    <Head> </Head>
    <title>Team - Here's To Those That Brought You BottleHub</title>
    <div class="hero-content max-w-full w-full">
      <div class="w-full justify-center text-center">
        <h2 class="text-xl font-black mb-8">Core</h2>
        <div class="grid grid-cols-2 md:flex justify-center">
          <TeamMate
            img="/team/boki.png"
            name="Chiemerie Onourah"
            role="Founder"
            x="https://x.com/OnuorahJoh35464"
          />
          <TeamMate
            img="/team/ronnie.png"
            name="Oghenefejiro Olokor"
            role="Head of defi research"
            x="https://twitter.com/ronnie_thedev"
            linkedin="https://www.linkedin.com/in/oghenefejiro-olokor-3a891a248/"
          />
          <TeamMate
            img="/team/8643.png"
            name="Ewanretor Giwa-Okugbe"
            role="Head of technology"
            x="https://x.com/ewanretorokugbe"
            linkedin="https://www.linkedin.com/in/ewanretorokugbe/"
          />
          <TeamMate
            img="/team/yang.png"
            name="Yang Chen"
            role="Lead Blockchain Engineer"
          />
        </div>

        <h2 class="text-xl font-black mb-8">Mates</h2>
        <div class="grid grid-cols-2 md:flex justify-center">
          <TeamMate
            img="/team/destus.png"
            name="Adolphus Noble"
            role="Game Programmer"
          />
          <TeamMate
            img="/team/spagie.png"
            name="Adejesuyemi Damilare"
            role="3d Artist"
          />
        </div>
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
