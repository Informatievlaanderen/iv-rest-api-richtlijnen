<template>
  <content-header />
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
        <vl-column width="5">
          <search-filter :filters="data?.filters" />
        </vl-column>
        <vl-column width="7">
          <agenda-item :events="data?.events" />
        </vl-column>
      </vl-grid>
    </vl-layout>
  </vl-region>
  <content-footer />
</template>

<script setup lang="ts">
const { data } = await useAsyncData('data', async () => {
  const osloEventData: Array<any> = (
    await fetch(import.meta.env.VITE_EVENT_API).then((result) => result.json())
  )
    .filter((x: any) => x.campaignTitle.includes('OSLO'))
    .map((x: any) => {
      return {
        title: x.title,
        startDate: new Date(x.startDate),
        endDate: new Date(x.endDate),
        campaignTitle: x.campaignTitle,
        registrationLink: x.registrationForm,
        location: x.physicalLocation,
      }
    })
    .sort(
      (a: any, b: any) =>
        new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
    )

  const domainFilter = {
    name: 'Domeinen',
    values: [...new Set(osloEventData.map((x: any) => x.campaignTitle).sort())],
  }

  return {
    filters: [domainFilter],
    events: osloEventData,
  }
})
</script>
