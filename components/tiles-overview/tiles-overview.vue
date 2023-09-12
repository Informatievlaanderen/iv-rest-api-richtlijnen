<template>
  <vl-region>
    <vl-layout>
      <vl-grid mod-stacked>
        <template v-for="navigationItem in navigationItems">
          <vl-column width="12" width-s="12">
            <vl-infoblock mod-type="news" :title="navigationItem?.title" />
          </vl-column>
          <vl-grid class="container">
            <vl-column
              v-for="link in navigationItem?.links"
              width="4"
              width-m="6"
              width-s="12"
            >
              <tile
                :href="link?.href"
                :description="link?.description"
                :title="link?.title"
              />
            </vl-column>
          </vl-grid>
        </template>
      </vl-grid>
    </vl-layout>
  </vl-region>
</template>

<script lang="ts">
import { NavigationMenu } from '~/types/navigationMenu'

export default {
  name: 'tilesOverview',
  props: {
    navigationItems: {
      type: Array<NavigationMenu>,
      default: [
        {
          title: 'Waarom OSLO?',
          links: [
            // {
            //   title: 'Over OSLO',
            //   href: '/over-oslo',
            //   description:
            //     'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            // },
            // {
            //   title: 'OSLO in de praktijk',
            //   href: '/oslo-in-de-praktijk',
            //   description:
            //     'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            // },
            // {
            //   title: 'OSLO in de praktijk',
            //   href: '/oslo-in-de-praktijk',
            //   description:
            //     'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
            // },
          ],
        },
      ],
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  width: 100%;
}
</style>
