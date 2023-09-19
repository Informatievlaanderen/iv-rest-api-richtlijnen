<template>
  <vl-region>
    <content-header />
    <vl-layout>
      <tilesOverview :tiles="data?.navigation" />
      <vl-title tag-name="h2">Datasets</vl-title>
      <infoTilesOverview :tiles="data?.datasets" />
      <vl-title tag-name="h2">FAQ</vl-title>
      <accordion :items="data?.faq" />
    </vl-layout>
    <content-footer />
  </vl-region>
</template>

<script setup lang="ts">
// Multiple queryContents require to await them all at the same time: https://github.com/nuxt/content/issues/1368
const { data } = await useLazyAsyncData('data', async () => {
  const [navData, datasetsData, faqData] = await Promise.all([
    queryContent('/navigation-menu').find(),
    queryContent('/datasets').find(),
    queryContent('/faq').find(),
  ])

  return {
    navigation: navData[0].navigationMenu,
    datasets: datasetsData[0].datasets,
    faq: faqData[0].FAQ,
  }
})
</script>
