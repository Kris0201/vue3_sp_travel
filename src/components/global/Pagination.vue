<template>
  <div>
    <h3>Pagination Demo</h3>
    <div class="pagination">
      <button type="button" class="solidBtn">1</button>
      <button type="button" class="hollowBtn">2</button>
      <button type="button" class="hollowBtn">3</button>
      <span>...</span>
      <button type="button" class="hollowBtn">4</button>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PaginationIndex',
}
</script>
<script setup></script>
<style lang="scss" scoped>
.pagination {
  display: flex;
  gap: 12px;
  align-items: center;
  color: $primary-1;
}

.solidBtn,
.hollowBtn {
  padding: 10px 17.5px;
  min-width: 44px;
  height: 44px;
  text-align: center;
  line-height: 50%;
}
</style>
