<template>
  <vl-layout>
    <vl-introduction>
      <slot />
    </vl-introduction>
  </vl-layout>
</template>

<script>
export default {
  data() {
    return {
      environment: import.meta.env.VITE_ENVIRONMENT,
    }
  },
}
</script>
