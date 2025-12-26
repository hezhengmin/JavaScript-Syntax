<template>
  <tutorial-layout title="計算屬性">
    <template #nav>
      <router-link to="/computed/name-demo">姓名案例</router-link>
      <router-link to="/computed/weather-demo">天氣案例</router-link>
      <router-link to="/">← 返回首頁</router-link>
    </template>
  </tutorial-layout>
</template>

<script>
import TutorialLayout from '@/components/TutorialLayout.vue'

export default {
  name: 'ComputedIndex',
  components: {
    TutorialLayout
  }
}
</script>
