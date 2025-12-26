<template>
  <div class="tutorial-page">
    <h1>Vue 介紹</h1>
    <p class="description">Vue.js 是一個漸進式 JavaScript 框架，用於構建用戶界面。</p>
    
    <section class="example">
      <h2>基本使用</h2>
      <div class="demo">
        <h3>示範：{{ message }}</h3>
        <input v-model="message" type="text" placeholder="輸入文字">
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>&lt;template&gt;
  &lt;div&gt;
    &lt;h3&gt;示範：&#123;&#123; message &#125;&#125;&lt;/h3&gt;
    &lt;input v-model="message" type="text"&gt;
  &lt;/div&gt;
&lt;/template&gt;

&lt;script&gt;
export default {
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  }
}
&lt;/script&gt;</code></pre>
      </div>
    </section>

    <section class="explanation">
      <h2>說明</h2>
      <ul>
        <li><strong>聲明式渲染</strong>：Vue 使用簡潔的模板語法來聲明式地將數據渲染到 DOM</li>
        <li><strong>響應式系統</strong>：當數據改變時，視圖會自動更新</li>
        <li><strong>&#123;&#123; &#125;&#125; 插值</strong>：用於在模板中顯示數據</li>
        <li><strong>v-model</strong>：實現表單輸入和應用狀態之間的雙向綁定</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Intro',
  data() {
    return {
      message: 'Hello Vue.js!'
    }
  }
}
</script>

<style scoped>
.tutorial-page {
  max-width: 900px;
}

h1 {
  color: #42b983;
  margin-bottom: 1rem;
  font-size: 2rem;
}

.description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
  line-height: 1.6;
}

.example {
  margin-bottom: 3rem;
}

h2 {
  color: #2c3e50;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  border-bottom: 2px solid #42b983;
  padding-bottom: 0.5rem;
}

.demo {
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #42b983;
}

.demo h3 {
  color: #42b983;
  margin-bottom: 1rem;
}

.demo input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  width: 100%;
  max-width: 400px;
}

.code {
  background-color: #2c3e50;
  color: #42b983;
  padding: 1.5rem;
  border-radius: 8px;
  overflow-x: auto;
}

.code h3 {
  color: white;
  margin-bottom: 1rem;
}

.code pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  line-height: 1.5;
}

.code code {
  color: #42b983;
}

.explanation {
  background-color: #f0f9ff;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

.explanation ul {
  margin-left: 1.5rem;
}

.explanation li {
  margin-bottom: 0.8rem;
  line-height: 1.6;
  color: #2c3e50;
}

.explanation strong {
  color: #3b82f6;
}
</style>
