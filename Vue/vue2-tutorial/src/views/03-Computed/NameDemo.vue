<template>
  <div class="tutorial-page">
    <h1>計算屬性 - 姓名案例</h1>
    <p class="description">computed 計算屬性用於處理複雜的邏輯計算，具有緩存機制。</p>
    
    <section class="example">
      <h2>完整寫法（getter 和 setter）</h2>
      <div class="demo">
        <div class="input-group">
          <label>姓：</label>
          <input v-model="firstName" type="text">
        </div>
        <div class="input-group">
          <label>名：</label>
          <input v-model="lastName" type="text">
        </div>
        <p class="result">全名：{{ fullName }}</p>
        <p class="result">全名：{{ fullName }}</p>
        <p class="result">全名：{{ fullName }}</p>
        <p class="info">📌 注意：雖然顯示多次，但 getter 只會調用一次（有緩存）</p>
        <button @click="fullName = '李-四'">設置全名為「李-四」</button>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>data() {
  return {
    firstName: '張',
    lastName: '三'
  }
},
computed: {
  fullName: {
    // getter：讀取 fullName 時調用
    get() {
      console.log('get被調用')
      return this.firstName + '-' + this.lastName
    },
    // setter：修改 fullName 時調用
    set(value) {
      const result = value.split('-')
      this.firstName = result[0]
      this.lastName = result[1]
    }
  }
}</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>簡寫形式（只讀）</h2>
      <div class="demo">
        <div class="input-group">
          <label>姓：</label>
          <input v-model="firstName2" type="text">
        </div>
        <div class="input-group">
          <label>名：</label>
          <input v-model="lastName2" type="text">
        </div>
        <p class="result">全名：{{ fullName2 }}</p>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>computed: {
  // 簡寫：只提供 getter
  fullName2() {
    return this.firstName2 + '-' + this.lastName2
  }
}</code></pre>
      </div>
    </section>

    <section class="explanation">
      <h2>Computed 特點</h2>
      <ul>
        <li><strong>緩存機制</strong>：只有依賴的數據改變時才會重新計算</li>
        <li><strong>性能優化</strong>：多次訪問會返回緩存的結果，不會重複計算</li>
        <li><strong>getter</strong>：計算屬性默認只有 getter，用於讀取</li>
        <li><strong>setter</strong>：需要時可以提供 setter，用於修改</li>
        <li><strong>響應式</strong>：依賴的數據變化時自動更新</li>
      </ul>
    </section>

    <section class="comparison">
      <h2>Computed vs Methods</h2>
      <div class="comparison-table">
        <div class="comparison-item">
          <h4>Computed 計算屬性</h4>
          <ul>
            <li>✅ 有緩存機制</li>
            <li>✅ 只有依賴改變才重新計算</li>
            <li>✅ 適合複雜計算</li>
            <li>❌ 不能傳參</li>
          </ul>
        </div>
        <div class="comparison-item">
          <h4>Methods 方法</h4>
          <ul>
            <li>❌ 沒有緩存</li>
            <li>❌ 每次調用都執行</li>
            <li>✅ 適合事件處理</li>
            <li>✅ 可以傳參</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ComputedNameDemo',
  data() {
    return {
      firstName: '張',
      lastName: '三',
      firstName2: '李',
      lastName2: '四'
    }
  },
  computed: {
    fullName: {
      get() {
        console.log('get被調用')
        return this.firstName + '-' + this.lastName
      },
      set(value) {
        console.log('set被調用', value)
        const result = value.split('-')
        this.firstName = result[0]
        this.lastName = result[1]
      }
    },
    fullName2() {
      return this.firstName2 + '-' + this.lastName2
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

.input-group {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.input-group label {
  min-width: 50px;
  font-weight: bold;
  color: #2c3e50;
}

.input-group input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  flex: 1;
  max-width: 300px;
}

.result {
  font-size: 1.2rem;
  color: #42b983;
  font-weight: bold;
  margin: 0.5rem 0;
}

.info {
  color: #666;
  font-size: 0.9rem;
  margin: 1rem 0;
  font-style: italic;
}

.demo button {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
}

.demo button:hover {
  background-color: #35a372;
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
  font-size: 1.1rem;
}

.code pre {
  margin: 0;
  font-family: 'Courier New', monospace;
  line-height: 1.5;
}

.code code {
  color: #42b983;
  font-size: 0.95rem;
}

.explanation, .comparison {
  background-color: #f0f9ff;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
  margin-bottom: 2rem;
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

.comparison-table {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.comparison-item {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.comparison-item h4 {
  color: #42b983;
  margin-bottom: 1rem;
}

.comparison-item ul {
  list-style: none;
  padding: 0;
}

.comparison-item li {
  margin-bottom: 0.5rem;
  padding-left: 1.5rem;
  color: #2c3e50;
}
</style>
