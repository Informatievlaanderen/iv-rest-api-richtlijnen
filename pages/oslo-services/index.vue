<template>
  <vl-region>
    <content-header
      title="Informatie vlaanderen"
      subtitle="Services"
      href="https://data.vlaanderen.be"
      :context="{
        href: 'https://data.vlaanderen.be',
        title: 'OSLO',
      }"
    />
    <vl-layout>
      <vl-region>
        <vl-introduction>
          Het Vlaams interoperabiliteitsprogramma Open Standaarden voor Linkende
          Organisaties biedt verschillende services aan. Ontdek hieronder met
          welke service wij jou van dienst kunnen zijn.
        </vl-introduction>
      </vl-region>
      <vl-region>
        <vl-grid mod-stacked>
          <vl-column width="6" width-s="12" v-for="item in data">
            <tile
              :title="item?.title"
              :description="item?.description"
              :href="item?._dir"
            />
          </vl-column>
        </vl-grid>
      </vl-region>
    </vl-layout>
    <content-footer />
  </vl-region>
</template>

<script setup lang="ts">
// Multiple queryContents require to await them all at the same time: https://github.com/nuxt/content/issues/1368
const { data } = await useAsyncData('', async () => {
  const [data] = await Promise.all([
    // Hardcoded this value due to trailing slashes causing issues with fetching the correct content
    queryContent('/oslo-services/').where({ _extension: 'json' }).find(),
  ])

  return data
})
</script>
