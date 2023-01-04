<template>
  <h3>Area Selector Demo</h3>
  <div class="location_search">
    <input type="text" placeholder="目的地" class="search_input" />
    <div class="search_select">
      <SvgIcon name="downArrow"></SvgIcon>
    </div>
    <div class="search_close">
      <SvgIcon class="close" name="close"></SvgIcon>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AreaSelector',
}
</script>
<script setup></script>
<style lang="scss" scoped>
.location_search {
  display: flex;
  justify-content: space-between;
  padding: 8px 12px;
  width: 306px;
  background-color: $gray;
  border: 1px solid $line;
  border-radius: 8px;

  .search_input {
    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
      font-size: $content-dk-body;
      font-family: $font;
      color: $secondary-3;
    }
  }

  .search_select & .search_close {
    width: 24px;
    height: 24px;
  }

  .search_close {
    display: none;
  }
}
</style>
