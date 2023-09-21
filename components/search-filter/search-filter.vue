<template>
  <vl-search-filter mod-alt>
    <template v-slot:items>
      <vl-search-filter-section v-for="filter in filters">
        <vl-search-filter-section-title>
          {{ filter.name }}
        </vl-search-filter-section-title>
        <ul>
          <vl-search-filter-item
            tag-name="li"
            v-for="(item, key) in filter.values"
          >
            <vl-radio v-model="radioValue" :value="item" :id="'radio_' + key">{{
              item
            }}</vl-radio>
          </vl-search-filter-item>
        </ul>
      </vl-search-filter-section>
    </template>
  </vl-search-filter>
</template>

<script setup lang="ts">
import { EventFilter } from '~/types/eventFilter'
defineProps({
  filters: {
    type: Array<EventFilter>,
  },
})

const radioValue = ref('')
</script>
