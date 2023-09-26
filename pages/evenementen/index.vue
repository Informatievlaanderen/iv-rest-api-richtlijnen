<template>
  <content-header
    title="Evenementen"
    subtitle="Ovezicht van alle OSLO-gerelateerde evenementen"
  />
  <vl-region>
    <vl-layout>
      <vl-grid mod-stacked>
        <vl-column>
          <vl-title tag-name="h1">Evenementen</vl-title>
          <vl-introduction>
            Hieronder vindt u een overzicht van alle evenementen die OSLO
            organiseert.
          </vl-introduction>
        </vl-column>
        <vl-column width="5" width-s="12">
          <search-filter
            :filters="data?.filters"
            @updateFilter="updateFilter"
          />
        </vl-column>
        <vl-column width="7" width-s="12">
          <agenda-item :events="data?.events" />
        </vl-column>
      </vl-grid>
    </vl-layout>
  </vl-region>
  <content-footer />
</template>

<script setup lang="ts">
import { Agenda } from '~/types/agenda'

let selectedCampaign = ref('')

const updateFilter = (campaignTitle: string) => {
  selectedCampaign.value = campaignTitle
}

const { data } = await useAsyncData(
  'data',
  async () => {
    const osloEventData: Array<Agenda> = await $fetch('/api/marcom')

    const domainFilter = {
      name: 'Domeinen',
      values: [
        'Alle evenementen',
        ...new Set(
          osloEventData.map((x: Agenda) => x.campaignTitle).sort() as string[],
        ),
      ],
    }

    if (selectedCampaign?.value !== 'Alle evenementen') {
      const filteredEvents = osloEventData.filter(
        (x: Agenda) => x?.campaignTitle?.includes(selectedCampaign?.value),
      )
      return {
        filters: [domainFilter],
        events: filteredEvents,
      }
    } else {
      return {
        filters: [domainFilter],
        events: osloEventData,
      }
    }
  },
  { watch: [selectedCampaign] },
)
</script>
