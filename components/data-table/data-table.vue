<template>
  <vl-data-table>
    <thead>
      <tr>
        <th v-for="header in headers">{{ header }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(value, key) in rows" :key="key">
        <td>
          {{ key }}
        </td>
        <td>{{ value }}</td>
      </tr>
    </tbody>
  </vl-data-table>
</template>

<script setup lang="ts" name="dataTable">
import { DataTable } from '~/types/dataTable'
defineProps<DataTable>()
</script>
=