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
    <div class="lg:flex lg:justify-center lg:items-center min-h-screen">
      <div class="lg:container">
        <Navigation />
        <slot />
        <Footer />
      </div></div
  ></Html>
</template>

<style>
.btn {
  @apply rounded-2xl;
}
</style>
