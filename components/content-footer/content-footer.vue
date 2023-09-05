<template>
  <div id="vlaanderen-footer" />
</template>

<script>
export default {
  mounted() {
    const footerScript = document.createElement('script')
    switch (import.meta.env.VITE_ENVIRONMENT) {
      case 'Test':
        footerScript.setAttribute(
          'src',
          'https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/c0df3610-36b9-4113-a487-05dfed92c317/embed',
        )
      case 'Production':
        footerScript.setAttribute(
          'src',
          'https://prod.widgets.burgerprofiel.vlaanderen.be/api/v1/widget/f1d7f80f-ad17-4f25-92b4-027a99785068/embed',
        )
      default:
        footerScript.setAttribute(
          'src',
          'https://tni.widgets.burgerprofiel.dev-vlaanderen.be/api/v1/widget/c0df3610-36b9-4113-a487-05dfed92c317/embed',
        )
    }
    document.head.appendChild(footerScript)
  },
}
</script>
