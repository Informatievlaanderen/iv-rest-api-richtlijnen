<template>
  <vl-region>
    <content-header
      title="Open standaarden"
      href="https://www.vlaanderen.be/digitaal-vlaanderen"
      subtitle="Voor linkende organisaties"
    />
    <vl-layout>
      <tilesOverview :tiles="data?.navigation" />
      <vl-grid>
        <vl-column width="10" width-s="12">
          <vl-title tag-name="h2" id="OSLO-Frontend"
            >OSLO frontend</vl-title
          >
        </vl-column>
      </vl-grid>
    </vl-layout>
    <content-footer />
  </vl-region>
</template>

<script setup lang="ts">
import { Index } from '~/types/index'


// Multiple queryContents require to await them all at the same time: https://github.com/nuxt/content/issues/1368
const { data } = await useAsyncData('data', async () => {
  const [data] = await Promise.all([
    queryContent<Index>('/configuration').find(),
  ])
  return data[0]
})
</script>
