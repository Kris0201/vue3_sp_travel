<template>
  <h3>TravelCard Demo</h3>
  <a href="" class="card" target="blank"
    ><!--卡片最外層-->
    <div class="card_head">
      <img
        src="https://i.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
        alt=""
        class="card_img"
      />
      <SvgIcon name="share" class="share"></SvgIcon>
    </div>
    <div class="card_body">
      <div class="card_body_title">天長地久橋</div>
      <div class="card_body_content">
        <div class="content_info">
          <SvgIcon name="locationGreen" class="locationGreen"></SvgIcon>
          <div class="info_text">嘉義縣</div>
        </div>
        <div class="content_info">
          <SvgIcon name="openTime"></SvgIcon>
          <div class="info_text">每日開放</div>
        </div>
      </div>
    </div>
  </a>
</template>

<script>
export default {
  name: 'TravelCard',
}
</script>
<script setup></script>
<style lang="scss" scoped>
.share {
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 20px;
  width: 15.43px;
  height: 16.1px;
  color: $white;
  background-color: $primary-2;
  border-radius: 13px;
}

.card {
  // hover時加上陰影效果
  display: flex;
  flex-direction: column;
  overflow: hidden; // 處理圖片邊角超出border-radius問題
  width: 330px;
  font-family: $font;
  text-decoration: none;
  background: $gray; // 上傳前記得改成白色
  border-radius: 16px;
  transition: 0.3s box-shadow ease-in;

  &:hover {
    box-shadow: 0 0 1.5rem rgb(0, 0, 0, 0.1);
  }

  &_head {
    position: relative;
  }

  &_img {
    width: 100%;
    vertical-align: middle;
  }

  &_body {
    padding: 8px 16px;
  }

  &_body_title {
    margin: 0 0 8px;
    font-size: $content-title;
    font-weight: $f-w-bold;
    color: $secondary-1;
    line-height: $content-title-line-height;
  }

  &_body_content {
    display: flex;
    gap: 16px;

    .content_info {
      display: flex;
      gap: 4px;

      svg {
        width: 24px;
        height: 24px;
      }

      .info_text {
        font-size: $note;
        font-weight: $f-w-base;
        line-height: $note-line-height;
        letter-spacing: $note-letter-spacing;
        color: $secondary-2;
      }
    }
  }
}
</style>
