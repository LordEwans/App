<template>
  <div class="w-full min-h-[67vh] flex items-center justify-center">
    <Head> </Head>
    <title>Team - Here's To Those That Brought You BottleHub</title>
    <div class="hero-content max-w-full w-full">
      <div class="w-full justify-center text-center">
        <h2 class="text-xl font-black mb-8">Core</h2>
        <div class="grid grid-cols-2 md:flex justify-center">
          <TeamMate
            img="assets/img/team/boki.png"
            name="Chiemerie Onourah"
            role="Founder"
            x="https://x.com/ewanretorokugbe"
          />
          <TeamMate
            img="assets/img/team/ronnie.png"
            name="Oghenefejiro Olokor"
            role="Head of defi research"
            x="https://twitter.com/ronnie_thedev"
            linkedin="https://www.linkedin.com/in/oghenefejiro-olokor-3a891a248/"
          />
          <TeamMate
            img="assets/img/team/8643.png"
            name="Ewanretor Giwa-Okugbe"
            role="Head of technology"
            x="https://x.com/ewanretorokugbe"
            linkedin="https://www.linkedin.com/in/ewanretorokugbe/"
          />
          <TeamMate
            img="assets/img/team/ronnie.png"
            name="Yang Chen"
            role="Lead Blockchain Engineer"
            x="https://x.com/ewanretorokugbe"
            linkedin="https://www.linkedin.com/in/ewanretorokugbe/"
          />
        </div>

        <h2 class="text-xl font-black mb-8">Mates</h2>
        <div class="grid grid-cols-2 md:flex justify-center">
          <TeamMate
            img="assets/img/team/boki.png"
            name="Adolphus Noble"
            role="Game Programmer"
            x="https://x.com/ewanretorokugbe"
          />
          <TeamMate
            img="assets/img/team/8643.png"
            name="Adejesuyemi Damilare"
            role="3d Artist"
            x="https://x.com/ewanretorokugbe"
            linkedin="https://www.linkedin.com/in/ewanretorokugbe/"
          />
          <TeamMate
            img="assets/img/team/8643.png"
            name="Firstname Surnname"
            role="Graphics Designer"
            x="https://x.com/ewanretorokugbe"
            linkedin="https://www.linkedin.com/in/ewanretorokugbe/"
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
