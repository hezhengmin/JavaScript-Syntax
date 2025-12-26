<template>
  <tutorial-layout title="列表渲染">
    <template #nav>
      <router-link to="/list/basic">列表基本使用</router-link>
      <router-link to="/list/key">Key 的作用</router-link>
      <router-link to="/list/filter">列表過濾</router-link>
      <router-link to="/list/sort">列表排序</router-link>
      <router-link to="/">← 返回首頁</router-link>
    </template>
  </tutorial-layout>
</template>

<script>
import TutorialLayout from '@/components/TutorialLayout.vue'

export default {
  name: 'ListIndexLayout',
  components: {
    TutorialLayout
  }
}
</script>
