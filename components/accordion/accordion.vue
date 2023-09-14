<template>
  <vl-region>
    <vl-accordion-list>
      <vl-grid mod-stacked-small>
        <vl-column width="6" width-m="12" v-for="item in items">
          <vl-accordion :title="item?.title" :id="item?.id" :modAltBg="true">
            <vl-grid>
              <div>
                {{ item?.content }}
              </div>
            </vl-grid>
          </vl-accordion>
        </vl-column>
      </vl-grid>
    </vl-accordion-list>
  </vl-region>
</template>

<script setup lang="ts">
import { Accordion } from '~/types/accordion'

defineProps({
  items: {
    type: Array<Accordion>,
    default: [
      {
        id: '1',
        title: 'Accordion one',
        subtitle: 'Subtitle of accordion one',
        content:
          'Lorem ipsum dolor sit amet consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies,nunc nisl aliquet nunc, eget aliquam nisl nisl eget aliquam ultricies,nunc nisl aliquet nunc, eget aliquam nisl',
      },
      {
        id: '2',
        title: 'Accordion two',
        subtitle: 'Subtitle of accordion two',
        content: 'Some explanation about this accordion item',
      },
      {
        id: '3',
        title: 'Accordion three',
        subtitle: 'Subtitle of accordion three',
        content: 'Some explanation about this accordion item',
      },
    ],
  },
})
</script>
