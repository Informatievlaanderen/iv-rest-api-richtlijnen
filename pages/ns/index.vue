<template>
  <vl-region>
    <content-header />
    <vl-layout>{{ data }}</vl-layout>
    <content-footer />
  </vl-region>
</template>

<script setup lang="ts">
// Multiple queryContents require to await them all at the same time: https://github.com/nuxt/content/issues/1368
const { data } = await useAsyncData('data', async () => {
  const [nsData] = await Promise.all([queryContent('/ns').find()])

  return {
    nsData: nsData[0],
  }
})
</script>
