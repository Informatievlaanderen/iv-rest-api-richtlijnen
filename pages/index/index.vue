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
          <vl-title tag-name="h2" id="datavlaanderen"
            >Data.vlaanderen.be</vl-title
          >
          <vl-region v-html="data?.about" />
          <vl-title tag-name="h2" id="datasets">Datasets</vl-title>
          <infoTilesOverview :tiles="data?.datasets" />
          <vl-title tag-name="h2" id="standaarden">Standaarden</vl-title>
          <vl-region v-html="data?.standards" />
          <vl-title tag-name="h2" id="faq">FAQ</vl-title>
          <accordion :items="data?.faq" />
        </vl-column>
        <vl-column width="2" width-s="12">
          <side-navigation :links="overview?.links" />
        </vl-column>
      </vl-grid>
    </vl-layout>
    <content-footer />
  </vl-region>
</template>

<script setup lang="ts">
import { OverviewLinks } from '~/types/linksOverview'
import { Index } from '~/types/index'

const overview: OverviewLinks = {
  links: [
    {
      href: '#datavlaanderen',
      title: 'Data.vlaanderen',
    },
    {
      href: '#datasets',
      title: 'Datasets',
    },
    {
      href: '#standaarden',
      title: 'Standaarden',
    },
    {
      href: '#faq',
      title: 'Veelgestelde vragen',
    },
  ],
}

// Multiple queryContents require to await them all at the same time: https://github.com/nuxt/content/issues/1368
const { data } = await useAsyncData('data', async () => {
  const [data] = await Promise.all([
    queryContent<Index>('/configuration').find(),
  ])
  return data[0]
})
</script>
