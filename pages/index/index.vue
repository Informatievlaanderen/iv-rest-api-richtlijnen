<template>
  <vl-region>
    <content-header />
    <introduction />
    <!-- conditionally show this data -->
    <tilesOverview :navigation-items="data" />
    <content-footer />
  </vl-region>
</template>

<script setup lang="ts">
const { data } = await useAsyncData(async () => {
  const data = await queryContent('/navigation-menu').find()
  return data[0].navigationMenu
})
</script>
