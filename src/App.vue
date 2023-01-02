<template>
  <component :is="layout"></component>
  <!--動態傳入layout資料夾裡的設定-->
</template>
<script>
export default {
  name: 'App',
}
</script>
<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

/**
 * 共用工具
 */
const route = useRoute()

/**
 * dynamic layout
 */
const layout = computed(() => route.meta.layout)
</script>
<style lang="css" src="@/css/normalize.css"></style>
