<template>
  <div class="page-container">
    <div class="back-nav">
      <router-link to="/" class="back-button">← 返回首頁</router-link>
    </div>
    <div class="tutorial-page">
    <h1>Props 傳值</h1>
    <p class="description">父組件通過 Props 向子組件傳遞數據，實現組件間的通信。</p>
    
    <section class="example">
      <h2>1. 基礎 Props 傳值</h2>
      <div class="demo">
        <div class="result">
          <student-card name="張三" age="20" gender="男"></student-card>
          <student-card name="李四" age="22" gender="女"></student-card>
          <student-card name="王五" age="21" gender="男"></student-card>
        </div>
      </div>
      
      <div class="code">
        <h3>子組件代碼：</h3>
        <pre><code>Vue.component('student-card', {
  props: ['name', 'age', 'gender'],
  template: `
    &lt;div class="card"&gt;
      &lt;h4&gt;{{ name }}&lt;/h4&gt;
      &lt;p&gt;年齡：{{ age }}&lt;/p&gt;
      &lt;p&gt;性別：{{ gender }}&lt;/p&gt;
    &lt;/div&gt;
  `
})</code></pre>

        <h3>父組件使用：</h3>
        <pre><code>&lt;student-card name="張三" age="20" gender="男"&gt;&lt;/student-card&gt;
&lt;student-card name="李四" age="22" gender="女"&gt;&lt;/student-card&gt;</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>2. 動態 Props</h2>
      <div class="demo">
        <div class="controls">
          <label>姓名：<input v-model="studentInfo.name" /></label>
          <label>年齡：<input v-model.number="studentInfo.age" type="number" /></label>
          <label>
            性別：
            <select v-model="studentInfo.gender">
              <option>男</option>
              <option>女</option>
            </select>
          </label>
        </div>
        <div class="result">
          <student-card 
            :name="studentInfo.name" 
            :age="studentInfo.age" 
            :gender="studentInfo.gender">
          </student-card>
        </div>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>&lt;student-card 
  :name="studentInfo.name" 
  :age="studentInfo.age" 
  :gender="studentInfo.gender"&gt;
&lt;/student-card&gt;

data() {
  return {
    studentInfo: {
      name: '陳六',
      age: 19,
      gender: '男'
    }
  }
}</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>3. Props 驗證</h2>
      <div class="demo">
        <div class="result">
          <product-card 
            title="筆記本電腦" 
            :price="8999" 
            category="電子產品">
          </product-card>
          <product-card 
            title="機械鍵盤" 
            :price="599" 
            category="配件">
          </product-card>
        </div>
      </div>
      
      <div class="code">
        <h3>帶驗證的 Props：</h3>
        <pre><code>Vue.component('product-card', {
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0
      }
    },
    category: {
      type: String,
      default: '未分類'
    }
  },
  template: `...`
})</code></pre>
      </div>
    </section>

    <section class="explanation">
      <h2>Props 說明</h2>
      <ul>
        <li><strong>基礎用法</strong>：使用字符串數組定義 props: ['name', 'age']</li>
        <li><strong>靜態 Props</strong>：直接傳遞字符串值 name="張三"</li>
        <li><strong>動態 Props</strong>：使用 v-bind 或 : 綁定動態值 :age="20"</li>
        <li><strong>Props 驗證</strong>：可以指定類型、必填、默認值、自定義驗證</li>
        <li><strong>單向數據流</strong>：Props 是單向的，子組件不應該修改 prop</li>
        <li><strong>類型檢查</strong>：String、Number、Boolean、Array、Object、Function</li>
      </ul>
    </section>

    <section class="tips">
      <h2>💡 注意事項</h2>
      <ul>
        <li>⚠️ 子組件不應該直接修改 prop，會導致警告</li>
        <li>💡 如需修改，應該在 data 中創建一個副本</li>
        <li>📌 HTML 屬性名不區分大小寫，camelCase 需轉為 kebab-case</li>
        <li>✨ 傳遞對象時，修改對象屬性會影響父組件（引用類型）</li>
      </ul>
    </section>
    </div>
  </div>
</template>

<script>
// 定義學生卡片組件
const StudentCard = {
  props: ['name', 'age', 'gender'],
  template: `
    <div class="card">
      <div class="card-header">
        <h4>{{ name }}</h4>
      </div>
      <div class="card-body">
        <p><strong>年齡：</strong>{{ age }} 歲</p>
        <p><strong>性別：</strong>{{ gender }}</p>
      </div>
    </div>
  `
}

// 定義產品卡片組件（帶驗證）
const ProductCard = {
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true,
      validator(value) {
        return value >= 0
      }
    },
    category: {
      type: String,
      default: '未分類'
    }
  },
  template: `
    <div class="card product-card">
      <div class="card-header">
        <h4>{{ title }}</h4>
        <span class="badge">{{ category }}</span>
      </div>
      <div class="card-body">
        <p class="price">¥{{ price }}</p>
      </div>
    </div>
  `
}

export default {
  name: 'ComponentProps',
  components: {
    StudentCard,
    ProductCard
  },
  data() {
    return {
      studentInfo: {
        name: '陳六',
        age: 19,
        gender: '男'
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
  border-left: 4px solid #42b983;
  margin-bottom: 1rem;
}

.controls {
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
}

.controls label {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  flex: 1;
  min-width: 150px;
  font-weight: 500;
}

.controls input,
.controls select {
  padding: 0.5rem;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

.controls input:focus,
.controls select:focus {
  outline: none;
  border-color: #42b983;
}

.result {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  min-width: 200px;
  transition: transform 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
}

.card-header {
  border-bottom: 2px solid #42b983;
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-header h4 {
  margin: 0;
  color: #42b983;
  font-size: 1.2rem;
}

.card-body p {
  margin: 0.5rem 0;
  color: #666;
}

.product-card .card-header {
  border-bottom-color: #3b82f6;
}

.product-card h4 {
  color: #3b82f6;
}

.badge {
  background-color: #42b983;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
}

.price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #f59e0b;
  text-align: center;
  margin-top: 1rem !important;
}

.code {
  background-color: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
}

.code h3 {
  color: #2c3e50;
  font-size: 1rem;
  margin-bottom: 0.5rem;
}

.code pre {
  background-color: #2d2d2d;
  color: #f8f8f2;
  padding: 1rem;
  border-radius: 4px;
  overflow-x: auto;
  margin: 0;
}

.code code {
  font-family: 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

.explanation {
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

.tips {
  background-color: #fffbeb;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #f59e0b;
}

.tips ul {
  margin-left: 1.5rem;
}

.tips li {
  margin-bottom: 0.8rem;
  line-height: 1.6;
  color: #2c3e50;
}
</style>
