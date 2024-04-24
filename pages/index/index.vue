<template>
  <content-header
    title="REST API richtlijnen"
    href="https://www.vlaanderen.be/digitaal-vlaanderen"
    subtitle="Digitaal Vlaanderen"
  />
  <vl-layout>
    <vl-region>
      <vl-grid mod-stacked>
        <vl-column width="9" width-s="12">
          <vl-introduction
            v-if="data?.description"
            v-html="data?.description"
          />
        </vl-column>
        <vl-column width="3" width-s="12">
          <side-navigation :links="overview?.links"></side-navigation>
        </vl-column>
        <vl-column width="9" width-s="12">
          <vl-title tag-name="h2" id="introduction">Introductie</vl-title>
          <vl-typography
            v-if="data?.introduction"
            v-html="data?.introduction"
          />
        </vl-column>
        <vl-column width="9" width-s="12">
          <vl-title tag-name="h2" id="standards"
            >Gerelateerde standaarden en richtlijnen
          </vl-title>
          <vl-typography v-if="data?.guidelines" v-html="data?.guidelines" />
        </vl-column>
        <vl-column width="9" width-s="12">
          <vl-title tag-name="h2" id="rest_url"
            >REST URL vormrichtlijnen</vl-title
          >
          <vl-typography>
            <guidelines-table />
          </vl-typography>
        </vl-column>
        <vl-column width="9" width-s="12">
          <vl-title tag-name="h5">Motivatie </vl-title>
          <vl-typography
            v-if="data?.formGuidelines"
            v-html="data?.formGuidelines"
          />
        </vl-column>
        <vl-column width="9" width-s="12">
          <vl-title tag-name="h2" id="api_design"
            >API design richtlijnen</vl-title
          >
          <vl-typography>
            <design-guidelines-table
              :notFound="data?.notFound"
              :serverError="data?.serverError"
              :clientError="data?.clientError"
            />
          </vl-typography>
        </vl-column>
        <vl-column width="9" width-s="12">
          <vl-title tag-name="h2" id="query_params"
            >Standaard query parameters</vl-title
          >
          <vl-typography>
            <query-params-table />
          </vl-typography>
        </vl-column>
        <vl-column width="9" width-s="12">
          <vl-title tag-name="h2" id="sem_interop_guidelines"
            >Semantische interoperabiliteit richtlijnen</vl-title
          >
          <vl-typography>
            <semantic-table />
          </vl-typography>
        </vl-column>
      </vl-grid>
    </vl-region>
  </vl-layout>
  <content-footer />
</template>

<script setup lang="ts">
import type { Index } from '~/types/index'
import type { OverviewLinks } from '~/types/linksOverview'
import guidelinesTable from '@components/tables/guidelines-table.vue'
import designGuidelinesTable from '@components/tables/design-guidelines-table.vue'
import queryParamsTable from '@components/tables/query-params-table.vue'
import semanticTable from '@components/tables/semantic-table.vue'

const overview: OverviewLinks = {
  links: [
    {
      href: '#introduction',
      title: 'Introductie',
    },
    {
      href: '#standards',
      title: 'Gerelateerde standaarden en richtlijnen',
    },
    {
      href: '#rest_url',
      title: 'REST URL vormrichtlijnen',
    },
    {
      href: '#api_design',
      title: 'API design richtlijnen',
    },
    {
      href: '#query_params',
      title: 'Standaard query parameters',
    },
    {
      href: '#sem_interop_guidelines',
      title: 'Semantische interoperabiliteit richtlijnen',
    },
  ],
}

const { data } = await useAsyncData('data', async () => {
  // using find() instead of findOne() since findOne() caused issues when the file didn't exist
  const [data] = await Promise.all([
    queryContent<Index>('/').where({ _extension: 'md' }).find(),
  ])

  return data[0]
})
</script>
