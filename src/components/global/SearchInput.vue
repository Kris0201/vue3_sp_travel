<template>
  <div>
    <h3>Search Input Demo</h3>
    <input type="text" placeholder="搜尋關鍵字" /><SvgIcon name="search"></SvgIcon>
    <br />
    <input type="text" placeholder="搜尋關鍵字" /><SvgIcon class="close" name="close"></SvgIcon>
  </div>
</template>
<script>
export default {
  name: 'SearchInput',
}
</script>
<script setup></script>
<style lang="scss" scoped>
.close {
  color: black;
}
</style>
