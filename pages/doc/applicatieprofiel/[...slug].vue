<template>
  <vl-region>
    <vl-layout>
      <div class="head">
        <vl-title tag-name="h1" class="title">{{ data?.title }}</vl-title>
        <dl>
          <dt>Laatste aanpasing</dt>
          <dd>{{ data?.dateModified }}</dd>
          <template v-if="data?.authors">
            <dt>Auteurs</dt>
            <dd v-for="author in data?.authors">
              <contributor
                :firstName="author?.firstName"
                :lastName="author.lastName"
                :email="author?.email"
                :workplace="author?.workplace"
              />
            </dd>
          </template>
          <template v-if="data?.editors">
            <dt>Editoren</dt>
            <dd v-for="editor in data?.editors">
              <contributor
                :firstName="editor?.firstName"
                :lastName="editor.lastName"
                :email="editor?.email"
                :workplace="editor?.workplace"
              />
            </dd>
          </template>
          <template v-if="data?.contributors">
            <dt>Medewerkers</dt>
            <dd v-for="contributor in data?.contributors">
              <contributor
                :firstName="contributor?.firstName"
                :lastName="contributor.lastName"
                :email="contributor?.email"
                :workplace="contributor?.workplace"
              />
            </dd>
          </template>
        </dl>
      </div>
      <div class="content">
        <vl-region>
          <introduction>
            <p>
              Dit document beschrijft een <strong>applicatieprofiel</strong>, in
              dit geval <strong>{{ data?.title }}</strong
              >. Dit applicatieprofiel beantwoordt de vraag over hoe het
              corresponderende domeinmodel in de praktijk kan toegepast worden.
              Daarbij worden de beperkingen (kardinaliteit, codelijsten)
              toegelicht en de overeenkomstige (RDF) termen opgelijst.
            </p>
          </introduction>
        </vl-region>
        <vl-region>
          <vl-title tag-name="h2" class="subtitle">Samenvatting</vl-title>
          <div v-html="data?.summary" />
        </vl-region>
        <vl-region>
          <vl-title tag-name="h2" class="subtitle"
            >Status van dit document</vl-title
          >
          <div v-html="data?.status" />
        </vl-region>
        <vl-region>
          <vl-title tag-name="h2" class="subtitle">Confirmiteit</vl-title>
          <div v-html="data?.conformity" />
        </vl-region>
        <vl-region>
          <vl-title tag-name="h2" class="subtitle">Overzicht</vl-title>
          <vl-title tag-name="h3" class="subtitle">Entiteiten</vl-title>
          <vl-region>
            <links-overview :links="data?.entities" />
          </vl-region>
          <vl-title tag-name="h3" class="subtitle">Datatypes</vl-title>
          <vl-region>
            <links-overview :links="data?.datatypes" />
          </vl-region>
          INSERT IMAGE HERE
        </vl-region>
        <vl-title tag-name="h2" class="subtitle">Entiteiten</vl-title>
        <template v-for="entity in data?.entities">
          <entity
            :title="entity?.title"
            :href="entity?.href"
            :description="entity?.description"
            :usage="entity?.usage"
            :properties="entity?.properties"
            :vocHref="entity?.vocHref"
          />
          <vl-region>
            <property-table :properties="entity?.properties" />
          </vl-region>
        </template>
        <vl-region>
          <vl-title tag-name="h2" class="subtitle">Datatypes</vl-title>
          <template v-for="datatype in data?.datatypes">
            <property-table :properties="datatype?.properties" />
          </template>
        </vl-region>
        <vl-region>
          <vl-title tag-name="h2" class="subtitle">JSON-LD context</vl-title>
          <p v-if="data?.jsonLD">
            Een herbruikbare JSON-LD context definitie voor dit
            applicatieprofiel is terug te vinden op:
            <a :href="data?.jsonLD">{{ data?.jsonLD }}</a>
          </p>
        </vl-region>
      </div>
    </vl-layout>
    <content-footer />
  </vl-region>
</template>

<script setup lang="ts">
import { Configuration } from '~/types/configuration'
const { path } = useRoute()

// Multiple queryContents require to await them all at the same time: https://github.com/nuxt/content/issues/1368
const { data } = await useAsyncData('data', async () => {
  const [nsData] = await Promise.all([
    queryContent<Configuration>(`${path}/configuration`).find(),
  ])

  return nsData[0]
})
</script>
