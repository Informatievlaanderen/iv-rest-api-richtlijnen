<template>
  <vl-region>
    <vl-layout>
      <vl-grid mod-stacked>
        <template v-for="tile in tiles">
          <vl-column width-s="12" v-if="tile?.title">
            <vl-typography tag-name="section">
              <h2>{{ tile?.title }}</h2>
            </vl-typography>
          </vl-column>
          <vl-column v-for="set in tile.sets" width="6" width-s="12">
            <info-tile
              :image="set?.image"
              :href="set?.href"
              :title="set?.title"
              :subtitle="set?.subtitle"
              :content="set?.content"
            />
          </vl-column>
        </template>
      </vl-grid>
    </vl-layout>
  </vl-region>
</template>

<script lang="ts">
import { Datasets } from '~/types/datasets'

export default {
  name: 'infoTilesOverview',
  props: {
    tiles: {
      type: Array<Datasets> || null,
      default: [
        {
          title: 'temp',
          sets: [
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
      ],
    },
  },
}
</script>
