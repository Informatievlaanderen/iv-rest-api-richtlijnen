<template>
  <vl-region>
    <content-header />
    <introduction />
    <tilesOverview :tiles="data?.navigation" />
    <infoTilesOverview :tiles="data?.datasets" />
    <content-footer />
  </vl-region>
</template>

<script setup lang="ts">
// Multiple queryContents require to await them all at the same time: https://github.com/nuxt/content/issues/1368
const { data } = await useAsyncData('equal', async () => {
  const [navData, datasetsData] = await Promise.all([
    queryContent('/navigation-menu').find(),
    queryContent('/datasets').find(),
  ])

  return {
    navigation: navData[0].navigationMenu,
    datasets: datasetsData[0].datasets,
  }
})
</script>
