<template>
  <vl-person-info :image-src="image?.src">
    <vl-title tagName="h2">{{ title }}</vl-title>
    <vl-typography>
      {{ description }}
    </vl-typography>
  </vl-person-info>
</template>

<script setup lang="ts" name="person">
import { Person } from '~/types/person'
defineProps<Person>()
</script>
