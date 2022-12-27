<template>
  <div class="layout">
    <!-- Header -->
    <div class="layout__content">
      <RouterView />
    </div>
    <!-- Footer -->
  </div>
</template>
<script>
export default {
  name: 'ExampleLayout',
}
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;

  &__content {
    margin: auto;
    padding: 32px 0;
    max-width: 1200px;
  }
}
</style>
