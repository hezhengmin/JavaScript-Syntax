<template>
  <tutorial-layout title="起步">
    <template #nav>
      <router-link to="/basic/intro">Vue 介紹</router-link>
      <router-link to="/basic/data-binding">資料綁定</router-link>
      <router-link to="/">← 返回首頁</router-link>
    </template>
  </tutorial-layout>
</template>

<script>
import TutorialLayout from '@/components/TutorialLayout.vue'

export default {
  name: 'BasicIndex',
  components: {
    TutorialLayout
  }
}
</script>
