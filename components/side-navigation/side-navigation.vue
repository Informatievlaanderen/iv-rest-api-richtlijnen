<template>
  <vl-side-navigation class="sticky" title="Op deze pagina">
    <vl-side-navigation-list>
      <vl-side-navigation-item
        v-for="item in links"
        :href="item?.href"
        :text="item?.title"
      />
    </vl-side-navigation-list>
  </vl-side-navigation>
</template>

<script setup lang="ts" name="sideNavigation">
import { LinksOverview } from '~/types/linksOverview'
defineProps<LinksOverview>()
</script>
