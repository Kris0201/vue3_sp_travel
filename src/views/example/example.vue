<template>
  <div v-show="menuConfig.isOpen" class="mask" @click="menuConfig.isOpen = false"></div>
  <div class="menu" :class="{ 'menu--open': menuConfig.isOpen }">
    <div class="menu__toggleButton" @click="menuConfig.isOpen = !menuConfig.isOpen">Menu</div>
    <ul class="menu__body">
      <li v-for="(i, iIdx) in menuConfig.list" :key="iIdx" :data-active="i.isActive" @click="clickMenuItem(iIdx)">
        {{ i.desc }}
      </li>
    </ul>
  </div>

  <div class="example">
    <h1>Example</h1>
    <PiniaExample v-if="demo === 'Pinia'"></PiniaExample>
    <SvgExample v-if="demo === 'Svg'"></SvgExample>
  </div>

  <div class="styleDisplay">
    引入 styleGuideMenu：
    <styleGuideMenu></styleGuideMenu>
    <Pagination></Pagination>
  </div>
</template>
<script>
export default {
  name: 'ExampleIndex',
}
</script>
<script setup>
import { computed, reactive } from 'vue'
import PiniaExample from './components/PiniaExample.vue'
import SvgExample from './components/SvgExample.vue'
import styleGuideMenu from './styleGuideMenu.vue'
import Pagination from '@/components/global/pagination.vue'

const menuConfig = reactive({
  isOpen: false,
  list: [
    { desc: 'Pinia', isActive: true },
    { desc: 'Svg', isActive: false },
    // { desc: '', isActive: false },
  ],
})

const demo = computed(() => {
  const list = menuConfig.list.filter(i => i.isActive)
  if (list.length === 0) return ''
  return list[0].desc
})

const clickMenuItem = index => {
  menuConfig.list.forEach(i => {
    if (!i.isActive) return
    i.isActive = false
  })
  menuConfig.list[index].isActive = true
}

// computed
</script>
<style lang="scss" scoped>
.mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(199, 199, 199, 0.59);
  z-index: $z-index-fixed;
}

.menu {
  $menu-w: 300px;
  $menu-bg: rgb(59, 182, 59);
  $menu-bg-hover: rgb(22, 173, 22);

  position: fixed;
  top: 0;
  left: -$menu-w;
  width: $menu-w;
  height: 100vh;
  font-weight: bold;
  color: white;
  z-index: $z-index-fixed;
  transition: 300ms;

  &--open {
    left: 0;
  }

  &__toggleButton {
    position: absolute;
    top: 32px;
    right: -32px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    width: 32px;
    height: 64px;
    font-weight: bold;
    color: white;
    background: $menu-bg;
    border: none;
    border-radius: 0 4px 4px 0;
    cursor: pointer;
    writing-mode: vertical-rl;
    text-orientation: mixed;

    &:hover {
      background: $menu-bg-hover;
    }
  }

  &__body {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 16px 0;
    height: 100%;
    background: $menu-bg;

    li {
      padding: 12px 32px;
      cursor: pointer;

      &:hover,
      &[data-active='true'] {
        background: $menu-bg-hover;
      }
    }
  }
}

// .example {
// }
</style>
