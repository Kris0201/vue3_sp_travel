<template>
  <div>
    <h3>Search Input Demo</h3>
    <div class="search_group">
      <input type="text" placeholder="搜尋關鍵字" class="search_input" />
      <div class="search_execute">
        <SvgIcon name="search"></SvgIcon>
      </div>
      <div class="search_close">
        <SvgIcon class="close" name="close"></SvgIcon>
      </div>
    </div>

    <br />
    <!-- <input type="text" placeholder="搜尋關鍵字" />
    <div class="search_close">
      <SvgIcon class="close" name="close"></SvgIcon>
    </div> -->
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
  color: $secondary-3;
}

.search {
  &_group {
    display: flex;
    justify-content: space-between;
    padding: 8px 12px;
    width: 306px;
    background-color: $gray;
    border: 1px solid $line;
    border-radius: 8px;
  }

  &_input {
    background-color: transparent;
    border: none;
    outline: none;

    &::placeholder {
      font-size: $content-dk-body;
      font-family: $font;
      color: $secondary-3;
    }
  }

  &_execute,
  &_close {
    width: 24px;
    height: 24px;
  }

  &_close {
    display: none;
  }
}
</style>
