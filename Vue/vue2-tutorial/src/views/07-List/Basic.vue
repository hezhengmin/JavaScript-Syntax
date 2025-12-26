<template>
  <div class="page-container">
    <div class="back-nav">
      <router-link to="/" class="back-button">← 返回首頁</router-link>
    </div>
    <div class="tutorial-page">
    <h1>列表基本使用</h1>
    <p class="description">使用 v-for 遍歷數組、對象、字串和數字。</p>
    
    <section class="example">
      <h2>1. 遍歷數組</h2>
      <div class="demo">
        <h3>飲料列表</h3>
        <ul>
          <li v-for="(drink, index) in drinks" :key="drink.id">
            {{ index + 1 }}. {{ drink.name }} ({{ drink.item }})
          </li>
        </ul>
      </div>
    </section>

    <section class="example">
      <h2>2. 遍歷對象</h2>
      <div class="demo">
        <h3>用戶信息</h3>
        <ul>
          <li v-for="(value, key) in user" :key="key">
            {{ key }}: {{ value }}
          </li>
        </ul>
      </div>
    </section>

    <section class="example">
      <h2>3. 遍歷字串</h2>
      <div class="demo">
        <h3>字串: "{{ str }}"</h3>
        <ul>
          <li v-for="(char, index) in str" :key="index">
            位置 {{ index }}: {{ char }}
          </li>
        </ul>
      </div>
    </section>

    <section class="example">
      <h2>4. 遍歷指定次數</h2>
      <div class="demo">
        <h3>循環 5 次</h3>
        <ul>
          <li v-for="n in 5" :key="n">
            第 {{ n }} 次
          </li>
        </ul>
      </div>
    </section>

    <section class="explanation">
      <h2>說明</h2>
      <ul>
        <li><strong>v-for="item in items"</strong>: 遍歷數組</li>
        <li><strong>v-for="(value, key) in object"</strong>: 遍歷對象</li>
        <li><strong>v-for="n in number"</strong>: 遍歷指定次數</li>
        <li><strong>:key</strong>: 為每個節點提供唯一標識，提高渲染效率</li>
      </ul>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ListBasic',
  data() {
    return {
      drinks: [
        { id: '01', item: 'Coffee', name: '咖啡' },
        { id: '02', item: 'Tea', name: '茶' },
        { id: '03', item: 'Milk', name: '牛奶' }
      ],
      user: {
        name: 'MingHe',
        country: 'Taiwan',
        age: 25
      },
      str: 'Hello'
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
.demo h3 { color: #42b983; margin-bottom: 1rem; }
.demo ul { list-style: none; padding: 0; }
.demo li { padding: 0.5rem; margin: 0.25rem 0; background-color: white; border-radius: 4px; }
.explanation { background-color: #f0f9ff; padding: 2rem; border-radius: 8px; border-left: 4px solid #3b82f6; }
.explanation ul { margin-left: 1.5rem; }
.explanation li { margin-bottom: 0.8rem; color: #2c3e50; }
.explanation strong { color: #3b82f6; }
</style>
