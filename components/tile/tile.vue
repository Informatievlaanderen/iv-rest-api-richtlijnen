<template>
  <vl-doormat :title="title" :href="href" class="tile">
    {{ description }}
  </vl-doormat>
</template>

<script lang="ts">
export default {
  name: 'tile',
  props: {
    title: {
      type: String,
      required: false,
    },
    href: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped lang="scss">
.tile {
  min-height: 5rem;
  height: 100%;
}
</style>
