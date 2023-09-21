<template>
  <vl-grid mod-stacked>
    <vl-column v-for="(item, key) in events" :key="key">
      <vl-agenda-item
        :title="item.title"
        :date="{
          datetime: item.startDate,
          day: new Date(item.startDate).getDate(),
          month: new Date(item.startDate).toLocaleString('nl-BE', {
            month: 'short',
          }),
        }"
        :title-href="item.registrationLink"
        :note="'Locatie: ' + item.location"
      >
        <p>
          <b
            >
            Op {{ item.startDate.toLocaleDateString('nl-BE') }}
            van
            {{
              item.startDate.toLocaleTimeString('nl-BE', {
                hour: 'numeric',
                minute: 'numeric',
              })
            }}
            tot
            {{
              item.endDate.toLocaleTimeString('nl-BE', {
                hour: 'numeric',
                minute: 'numeric',
              })
            }}</b
          >
        </p>
      </vl-agenda-item>
    </vl-column>
  </vl-grid>
</template>

<script setup lang="ts">
//import { AgendaItem } from '~/types/agendaItem'
defineProps({
  events: {
    type: Array<any>,
  },
})
</script>
