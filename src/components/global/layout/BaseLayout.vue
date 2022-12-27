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
  name: 'BaseLayout',
}
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;

  // &__content {
  // }
}
</style>
