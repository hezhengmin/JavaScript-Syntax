<template>
  <tutorial-layout title="偵聽器 Watch">
    <template #nav>
      <router-link to="/watch/weather">天氣案例</router-link>
      <router-link to="/watch/deep">深度監聽</router-link>
      <router-link to="/">← 返回首頁</router-link>
    </template>
  </tutorial-layout>
</template>

<script>
import TutorialLayout from '@/components/TutorialLayout.vue'

export default {
  name: 'WatchIndex',
  components: {
    TutorialLayout
  }
}
</script>
