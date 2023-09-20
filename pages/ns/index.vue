<template>
  <vl-region>
    <content-header />
    <vl-layout>
      <vl-region>
        <introduction v-if="data?.content?.introduction">
          {{ data?.content?.introduction }}
        </introduction>
      </vl-region>
      <vl-region>
        <vl-typography
          tag-name="section"
          v-for="paragraph in data?.content?.paragraphs"
        >
          {{ paragraph }}
        </vl-typography>
      </vl-region>
      <vl-region>
        <vl-column width="12" width-s="12">
          <vl-infoblock
            mod-type="news"
            title="Applicatieprofielen"
            id="Applicatieprofielen"
          />
        </vl-column>
      </vl-region>
      <vl-region>
        <vl-column width="12" width-s="12">
          <vl-infoblock mod-type="news" title="Vocabularia" id="Vocabularia" />
        </vl-column>
        <infoTilesOverview :tiles="data?.entries" />
      </vl-region>
      <vl-region>
        <vl-title tag-name="h2">Veelgestelde vragen</vl-title>
        <accordion :items="data?.content?.faq" />
      </vl-region>
    </vl-layout>
    <content-footer />
  </vl-region>
</template>

<script setup lang="ts">
import { Configuration } from '~/types/configuration'
import { Content } from '~/types/content'
const { path } = useRoute()

// Multiple queryContents require to await them all at the same time: https://github.com/nuxt/content/issues/1368
const { data } = await useAsyncData('', async () => {
  const [content, data] = await Promise.all([
    // Hardcoded this value due to trailing slashes causing issues with fetching the correct content
    queryContent<Content>('/ns/content').where({ _extension: 'md' }).find(),
    queryContent<Configuration>(`${path}`).where({ _extension: 'json' }).find(),
  ])

  return {
    entries: data,
    content: content[0],
  }
})
</script>
