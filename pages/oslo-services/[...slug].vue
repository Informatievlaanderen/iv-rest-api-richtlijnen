<template #service>
  <vl-region>
    <content-header title="Informatie vlaanderen" />
    <vl-layout>
      <vl-region>
        <vl-title tag-name="h2" tag-style="h2" mod-no-space-bottom>
          Doel
        </vl-title>
        <vl-region v-html="data?.goal" />
        <vl-title tag-name="h2" tag-style="h2" mod-no-space-bottom>
          Roadmap
        </vl-title>
        <vl-region>
          <steps v-if="data?.roadmap" :steps="data?.roadmap" />
        </vl-region>
        <vl-title tag-name="h2" tag-style="h2" mod-no-space-bottom>
          Team
        </vl-title>
        <vl-region>
          <vl-grid>
            <vl-column v-for="item in data?.team" width="4" width-s="12">
              <person
                :image="item.image"
                :description="item?.description"
                :title="item?.title"
            /></vl-column>
          </vl-grid>
        </vl-region>
        <vl-title tag-name="h2" tag-style="h2" mod-no-space-bottom>
          Indicatieve raming
        </vl-title>
        <data-table
          :headers="data?.estimate?.headers"
          :rows="data?.estimate?.rows"
          :footer="data?.estimate?.footer"
        />
      </vl-region>
    </vl-layout>
    <content-footer />
  </vl-region>
</template>

<script setup lang="ts">
import { OSLOService } from '~/types/osloService'

const { data } = await useAsyncData('data', async () => {
  const { params } = useRoute()

  const [data] = await Promise.all([
    queryContent<OSLOService>(
      `/oslo-services/${params?.slug?.[0]}/configuration`,
    ).find(),
  ])
  return data[0]
})
if (!data.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}
</script>
