<template>
  <vl-region>
    <vl-layout>
      <vl-grid mod-stacked>
        <vl-column v-for="tile in tiles" width="6" width-s="12">
          <info-tile
            :image="tile?.image"
            :href="tile?.href"
            :title="tile?.title"
            :subtitle="tile?.subtitle"
            :content="tile?.content"
          />
        </vl-column>
      </vl-grid>
    </vl-layout>
  </vl-region>
</template>

<script lang="ts">
import { Dataset } from '~/types/dataset'

export default {
  name: 'infoTilesOverview',
  props: {
    tiles: {
      type: Array<Dataset>,
      default: [
        {
          title: 'Dit is mijn titel',
          href: 'https://www.google.com',
          subtitle: 'Dit is mijn subtitel',
          image: {
            src: 'https://www.placehold.it/100x100',
            alt: 'placeholder',
          },
          content:
            'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies,nunc',
        },
      ],
    },
  },
}
</script>
