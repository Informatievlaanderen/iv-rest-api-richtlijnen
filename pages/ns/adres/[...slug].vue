<template>
  <vl-region>
    <vl-layout>
      <div class="head">
        <vl-title tag-name="h1" class="title">{{ data?.name }}</vl-title>
        <vl-title tag-name="h2" class="subtitle"
          >Uitgegeven op {{ data?.datePublished }}</vl-title
        >
        <dl>
          <dt>Laatste aanpasing</dt>
          <dd>{{ data?.dateModified }}</dd>
          <dt>Laatste versie</dt>
          <a :href="data?.lastVersion">{{ data?.lastVersion }}</a>
          <dt>Auteurs</dt>
          <dd v-for="author in data?.authors">
            <contributor
              :firstName="author?.firstName"
              :lastName="author.lastName"
              :email="author?.email"
              :workplace="author?.workplace"
            />
          </dd>
          <dt>Medewerkers</dt>
          <dd v-for="contributor in data?.contributors">
            <contributor
              :firstName="contributor?.firstName"
              :lastName="contributor.lastName"
              :email="contributor?.email"
              :workplace="contributor?.workplace"
            />
          </dd>
        </dl>
      </div>
      <div class="content">
        <vl-region>
          <vl-title tag-name="h2" class="subtitle">Samenvatting</vl-title>
          <div v-html="data?.summary"></div>
        </vl-region>
        <vl-region>
          <vl-title tag-name="h2" class="subtitle"
            >Status van dit document</vl-title
          >
          <div v-html="data?.status"></div>
        </vl-region>
        <ol>
          <li class="list__item">
            <vl-title tag-name="h2" class="subtitle">Licentie</vl-title>
          </li>
          <vl-region v-html="data?.license"></vl-region>
          <li class="list__item">
            <vl-title tag-name="h2" class="subtitle">Conformiteit</vl-title>
          </li>
          <vl-region v-html="data?.conformity"></vl-region>
          <li class="list__item">
            <vl-title tag-name="h2" class="subtitle">Overzicht</vl-title>
          </li>
          <vl-region v-html="data?.overview"></vl-region>
          <vl-title tag-name="h3" class="subtitle">Klassen</vl-title>
          <vl-region>
            <links-overview :links="data?.classes" />
          </vl-region>
          <vl-title tag-name="h3" class="subtitle">Eigenschappen</vl-title>
          <vl-region>
            <links-overview :links="data?.properties" />
          </vl-region>
          <!-- CLASSES -->
          <li class="list__item">
            <vl-title tag-name="h2" class="subtitle">Klassen</vl-title>
          </li>
          <vl-region v-for="item in data?.classes">
            <vl-title tag-name="h3" class="subtitle" :id="item?.href"
              >Klasse {{ item?.title }}</vl-title
            >
            <data-table :headers="item?.headers" :rows="item?.rows" />
          </vl-region>
          <!-- PROPERTIES -->
          <li class="list__item">
            <vl-title tag-name="h2" class="subtitle">Eigenschappen</vl-title>
          </li>
          <vl-region v-for="item in data?.properties">
            <vl-title tag-name="h3" class="subtitle" :id="item?.href"
              >Eigenschap {{ item?.title }}</vl-title
            >
            <data-table
              v-for="item in data?.properties"
              :headers="item?.headers"
              :rows="item?.rows"
            />
          </vl-region>
          <!-- TERMINOLOGIES -->
          <li class="list__item">
            <vl-title tag-name="h2" class="subtitle"
              >Externe terminologie</vl-title
            >
          </li>
        </ol>
        <vl-region v-for="item in data?.terminologies">
          <vl-title tag-name="h3" class="subtitle" :id="item?.href">{{
            item?.title
          }}</vl-title>
          <data-table :headers="item?.headers" :rows="item?.rows" />
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

<style scoped lang="scss" src="./style.scss" />
