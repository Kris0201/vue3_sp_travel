<template>
  <div class="demo">
    <div>
      <!-- font -->
      <h1>H1 58px 用於lg大標題</h1>
      <h2>H2 33px 用於sm大標題</h2>
      <h3>H3 24px 用於page標題</h3>
      <div class="content-title">Title 18px 用於項目標題</div>
      <div class="content-dk-body">Desk Body1 18px 用於 lg & md 正文</div>
      <div class="content-mb-body">Mobile Body1 16px 用於sm 正文</div>
      <div class="noe">Body 2 14px 用於備註文字</div>
    </div>
    <hr />
    <div>
      <h3>Buttons Demo</h3>
      <div class="note">hollow</div>
      <button type="button" class="hollowBtn">基隆</button>

      <div class="note">solid</div>
      <button type="button" class="solidBtn">基隆</button>
    </div>
    <div>
      <h3>Icon Demo</h3>
      <img src="@/assets/icons/anping-fort.svg" alt="" />
      <br />
      <img src="@/assets/images/LOGO.svg" alt="" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'StyleGuideMenu',
}
</script>
<style lang="scss" scoped>
.demo {
  margin: 20px;
}

// mixin 示範
// @mixin text($color: $secondary-1) {
//   color: $color; // 空變數

//   &:hover {
//     color: $primary-3; // 全域變數
//   }
// }

// h1 {
//   @include text($primary-1);
// }

// h2 {
//   @include text($primary-2);
// }

// h3 {
//   @include text;
// }
</style>
