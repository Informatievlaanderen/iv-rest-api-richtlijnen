<template>
  <vl-region>
    <content-header />
    <vl-layout>
      <template v-for="item in data">
        {{ item?.name }}
      </template>    
    </vl-layout>
    <content-footer />
  </vl-region>
</template>

<script setup lang="ts">
import { Configuration } from '~/types/configuration'
const { path } = useRoute()

// Multiple queryContents require to await them all at the same time: https://github.com/nuxt/content/issues/1368
const { data } = await useAsyncData('data', async () => {
  const [data] = await Promise.all([
    queryContent<Configuration>(`${path}`).find(),
  ])

  return data
})
</script>
