<template>
  <div>
    <h2>Svg</h2>
    <!-- name 傳入 svg 檔名 -->
    <!-- svg 大小/顏色等樣式可透過 css 設置 -->
    <!-- svg 檔案中, 如需要套用 css color , fill 須改為 fill="currentColor" -->
    <!-- svg 檔案中如有修改，修改後要重啟專案 -->
    <SvgIcon class="icon" name="boldArrow"></SvgIcon>
  </div>
</template>
<script>
export default {
  name: 'SvgExample',
}
</script>
<style lang="scss" scoped>
.icon {
  width: 24px;
  height: 24px;
  color: green;

  &:hover {
    color: red;
  }
}
</style>
