<template>
  <div class="page-container">
    <div class="back-nav">
      <router-link to="/" class="back-button">← 返回首頁</router-link>
    </div>
    <div class="tutorial-page">
    <h1>組件基礎</h1>
    <p class="description">組件是 Vue 的核心功能，可以封裝可重用的代碼。</p>
    
    <section class="example">
      <h2>1. 基礎組件使用</h2>
      <div class="demo">
        <my-button></my-button>
        <my-button></my-button>
        <my-button></my-button>
      </div>
    </section>

    <section class="example">
      <h2>2. 組件計數器</h2>
      <div class="demo">
        <counter-component></counter-component>
        <counter-component></counter-component>
      </div>
    </section>

    <section class="explanation">
      <h2>說明</h2>
      <ul>
        <li><strong>組件定義</strong>: 使用 Vue.component() 或局部註冊</li>
        <li><strong>組件數據</strong>: data 必須是函數</li>
        <li><strong>組件重用</strong>: 每個組件實例維護獨立的數據副本</li>
        <li><strong>命名規範</strong>: 建議使用 kebab-case 或 PascalCase</li>
      </ul>
    </section>
    </div>
  </div>
</template>

<script>
const MyButton = {
  template: `
    <button style="padding: 0.5rem 1rem; background: #42b983; color: white; border: none; border-radius: 4px; margin: 0.5rem; cursor: pointer;">
      點擊我
    </button>
  `
}

const CounterComponent = {
  data() {
    return {
      count: 0
    }
  },
  template: `
    <div style="background: white; padding: 1rem; margin: 0.5rem; border-radius: 4px; display: inline-block;">
      <p>計數：{{ count }}</p>
      <button @click="count++" style="padding: 0.5rem 1rem; background: #42b983; color: white; border: none; border-radius: 4px; cursor: pointer;">
        增加
      </button>
    </div>
  `
}

export default {
  name: 'ComponentBasic',
  components: {
    MyButton,
    CounterComponent
  }
}
</script>

<style scoped>
.page-container {
  padding: 2rem;
}

.back-nav {
  margin-bottom: 2rem;
}

.back-button {
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 1.5rem;
  background-color: #42b983;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.back-button:hover {
  background-color: #35a372;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.tutorial-page {
  max-width: 900px;
  margin: 0 auto;
}
h1 { color: #42b983; margin-bottom: 1rem; font-size: 2rem; }
.description { font-size: 1.1rem; color: #666; margin-bottom: 2rem; }
.example { margin-bottom: 3rem; }
h2 { color: #2c3e50; margin-bottom: 1rem; font-size: 1.5rem; border-bottom: 2px solid #42b983; padding-bottom: 0.5rem; }
.demo { background-color: #f9f9f9; padding: 2rem; border-radius: 8px; border-left: 4px solid #42b983; }
.explanation { background-color: #f0f9ff; padding: 2rem; border-radius: 8px; border-left: 4px solid #3b82f6; }
.explanation ul { margin-left: 1.5rem; }
.explanation li { margin-bottom: 0.8rem; color: #2c3e50; }
.explanation strong { color: #3b82f6; }
</style>
