<template>
  <tutorial-layout title="組件">
    <template #nav>
      <router-link to="/component/basic">組件基礎</router-link>
      <router-link to="/component/props">Props 傳值</router-link>
      <router-link to="/component/emit">Emit 事件</router-link>
      <router-link to="/component/slot">插槽 Slot</router-link>
      <router-link to="/">← 返回首頁</router-link>
    </template>
  </tutorial-layout>
</template>

<script>
import TutorialLayout from '@/components/TutorialLayout.vue'

export default {
  name: 'ComponentIndexLayout',
  components: {
    TutorialLayout
  }
}
</script>
