<template>
  <tutorial-layout title="事件處理">
    <template #nav>
      <router-link to="/events/basic">事件基本使用</router-link>
      <router-link to="/events/modifiers">事件修飾符</router-link>
      <router-link to="/events/keyboard">鍵盤事件</router-link>
      <router-link to="/">← 返回首頁</router-link>
    </template>
  </tutorial-layout>
</template>

<script>
import TutorialLayout from '@/components/TutorialLayout.vue'

export default {
  name: 'EventsIndexUpdated',
  components: {
    TutorialLayout
  }
}
</script>
