<template>
  <vl-grid mod-stacked>
    <vl-column v-for="(item, key) in events" :key="key">
      <vl-agenda-item
        v-if="item?.startDate && item?.endDate"
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
          <b>
            Op {{ new Date(item.startDate).toLocaleDateString('nl-BE') }}
            van
            {{
              new Date(item.startDate).toLocaleTimeString('nl-BE', {
                hour: 'numeric',
                minute: 'numeric',
              })
            }}
            tot
            {{
              new Date(item.endDate).toLocaleTimeString('nl-BE', {
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

<script setup lang="ts" name="agendaItem">
import { Agenda } from '~/types/agenda'
defineProps({
  events: {
    type: Array<Agenda>,
  },
})
</script>
