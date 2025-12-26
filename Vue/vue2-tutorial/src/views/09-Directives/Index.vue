<template>
  <div class="page-container">
    <div class="back-nav">
      <router-link to="/" class="back-button">← 返回首頁</router-link>
    </div>
    <div class="tutorial-page">
    <h1>指令</h1>
    <p class="description">Vue 的內建指令和自定義指令。</p>
    
    <section class="example">
      <h2>1. 內建指令</h2>
      <div class="demo">
        <h4>v-text</h4>
        <p v-text="text"></p>
        
        <h4>v-html</h4>
        <div v-html="html"></div>
        
        <h4>v-once（只渲染一次）</h4>
        <p v-once>{{ count }}</p>
        <button @click="count++">增加（上面的數字不會變）</button>
        <p>當前計數：{{ count }}</p>
        
        <h4>v-pre（跳過編譯）</h4>
        <p v-pre>{{ 這不會被編譯 }}</p>
        
        <h4>v-cloak（防止閃爍）</h4>
        <p v-cloak>{{ message }}</p>
      </div>
    </section>

    <section class="example">
      <h2>2. 自定義指令示例</h2>
      <div class="demo">
        <h4>v-focus（自動聚焦）</h4>
        <input v-focus type="text" placeholder="自動聚焦">
        
        <h4>v-color（自定義顏色）</h4>
        <p v-color="'red'">紅色文字</p>
        <p v-color="'blue'">藍色文字</p>
        <p v-color="customColor">動態顏色</p>
        <input v-model="customColor" type="color">
      </div>
    </section>

    <section class="explanation">
      <h2>說明</h2>
      <ul>
        <li><strong>v-text</strong>: 更新元素的文本內容</li>
        <li><strong>v-html</strong>: 更新元素的 innerHTML</li>
        <li><strong>v-once</strong>: 只渲染元素和組件一次</li>
        <li><strong>v-pre</strong>: 跳過這個元素和子元素的編譯</li>
        <li><strong>v-cloak</strong>: 保持在元素上直到關聯實例結束編譯</li>
        <li><strong>自定義指令</strong>: 可以封裝 DOM 操作邏輯</li>
      </ul>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DirectivesIndex',
  data() {
    return {
      text: '這是 v-text 的內容',
      html: '<strong style="color: #42b983;">這是 HTML 內容</strong>',
      count: 0,
      message: '這是 v-cloak 的內容',
      customColor: '#42b983'
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    },
    color: {
      bind(el, binding) {
        el.style.color = binding.value
      },
      update(el, binding) {
        el.style.color = binding.value
      }
    }
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
.demo h4 { color: #42b983; margin: 1rem 0 0.5rem; }
.demo p { margin: 0.5rem 0; font-size: 1.1rem; }
.demo input { padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; margin: 0.5rem; }
.demo button { padding: 0.5rem 1rem; background-color: #42b983; color: white; border: none; border-radius: 4px; margin: 0.5rem; cursor: pointer; }
[v-cloak] { display: none; }
.explanation { background-color: #f0f9ff; padding: 2rem; border-radius: 8px; border-left: 4px solid #3b82f6; }
.explanation ul { margin-left: 1.5rem; }
.explanation li { margin-bottom: 0.8rem; color: #2c3e50; }
.explanation strong { color: #3b82f6; }
</style>
