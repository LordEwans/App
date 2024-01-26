<script lang="js" setup>
const showWaitlist =() => {
  waitlist.showModal();
}
</script>
<template>
  <Html lang="en">
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="gambling,gaming,gamblefi,gamefi,cryptocurrency,crypto,game,games,blockchain,fi,ethereum,ethers,polygon,zkevm,testnet,mainnet,competitive,waitlist,multiplayer,casino,web3,token,tokenomics,play-to-earn,blockchain-gaming,nft-gaming,decentralized-gaming,crypto-gaming,metis,layer,2,scaling,solution,defi,platform,esports,ranked-matchmaking,leaderboards,challenges,tournaments,ecosystem,metaverse,community,virtual-world,digital-assets"
      />
    </Head>
    <div class="min-h-screen">
      <div class="lg:flex lg:items-center w-full h-[80px]">
        <Navigation />
      </div>
      <div class="lg:flex lg:justify-center lg:items-center min-h-fit lg:py-5">
        <div class="lg:container">
          <slot />
          <Footer />
        </div>
      </div>
    </div>
  </Html>
</template>

<style>
.btn {
  @apply rounded-2xl;
}

/** Modified the container code **/
@media (min-width: 1024px) {
  .lg\:container {
    width: 100%;
  }
}
@media (min-width: 1024px) {
  @media (min-width: 640px) {
    .lg\:container {
      min-width: 640px;
    }
  }
}
@media (min-width: 1024px) {
  @media (min-width: 768px) {
    .lg\:container {
      min-width: 768px;
    }
  }
}
@media (min-width: 1024px) {
  @media (min-width: 1024px) {
    .lg\:container {
      min-width: 1024px;
    }
  }
}
@media (min-width: 1024px) {
  @media (min-width: 1280px) {
    .lg\:container {
      min-width: 1280px;
    }
  }
}
@media (min-width: 1024px) {
  @media (min-width: 1536px) {
    .lg\:container {
      min-width: 1536px;
    }
  }
}
@media (min-width: 1024px) {
  @media (min-width: 1700px) {
    .lg\:container {
      min-width: 1700px;
    }
  }
}
@media (min-width: 1024px) {
  @media (min-width: 1800px) {
    .lg\:container {
      min-width: 1800px;
    }
  }
}
</style>
