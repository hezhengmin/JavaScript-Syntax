<template>
  <div class="page-container">
    <div class="back-nav">
      <router-link to="/" class="back-button">← 返回首頁</router-link>
    </div>
    <div class="tutorial-page">
    <h1>Emit 事件</h1>
    <p class="description">子組件通過 $emit 向父組件發送事件，實現子向父通信。</p>
    
    <section class="example">
      <h2>1. 基礎事件傳遞</h2>
      <div class="demo">
        <div class="result">
          <div class="parent-box">
            <p>父組件收到的消息：<strong>{{ message }}</strong></p>
            <button-counter @increment="handleIncrement"></button-counter>
          </div>
        </div>
      </div>
      
      <div class="code">
        <h3>子組件代碼：</h3>
        <pre><code>Vue.component('button-counter', {
  data() {
    return { count: 0 }
  },
  methods: {
    handleClick() {
      this.count++
      this.$emit('increment', this.count)
    }
  },
  template: `
    &lt;button @click="handleClick"&gt;
      點擊了 {{ count }} 次
    &lt;/button&gt;
  `
})</code></pre>

        <h3>父組件使用：</h3>
        <pre><code>&lt;button-counter @increment="handleIncrement"&gt;&lt;/button-counter&gt;

methods: {
  handleIncrement(count) {
    this.message = `按鈕被點擊了 ${count} 次`
  }
}</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>2. 帶參數的事件</h2>
      <div class="demo">
        <div class="result">
          <div class="parent-box">
            <p>購物車總金額：<strong class="price">¥{{ totalPrice }}</strong></p>
            <div class="products">
              <product-item
                v-for="product in products"
                :key="product.id"
                :product="product"
                @add-to-cart="addToCart">
              </product-item>
            </div>
          </div>
        </div>
      </div>
      
      <div class="code">
        <h3>子組件代碼：</h3>
        <pre><code>Vue.component('product-item', {
  props: ['product'],
  methods: {
    addToCart() {
      this.$emit('add-to-cart', {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price
      })
    }
  },
  template: `...`
})</code></pre>

        <h3>父組件處理：</h3>
        <pre><code>methods: {
  addToCart(product) {
    this.totalPrice += product.price
    console.log('添加商品：', product.name)
  }
}</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>3. 自定義 v-model</h2>
      <div class="demo">
        <div class="result">
          <div class="parent-box">
            <p>輸入的內容：<strong>{{ inputValue }}</strong></p>
            <custom-input v-model="inputValue"></custom-input>
          </div>
        </div>
      </div>
      
      <div class="code">
        <h3>子組件代碼：</h3>
        <pre><code>Vue.component('custom-input', {
  props: ['value'],
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    }
  },
  template: `
    &lt;input 
      :value="value" 
      @input="handleInput"
      placeholder="輸入內容..."
    /&gt;
  `
})</code></pre>

        <h3>父組件使用：</h3>
        <pre><code>&lt;custom-input v-model="inputValue"&gt;&lt;/custom-input&gt;

// 等同於：
&lt;custom-input 
  :value="inputValue" 
  @input="inputValue = $event"&gt;
&lt;/custom-input&gt;</code></pre>
      </div>
    </section>

    <section class="explanation">
      <h2>$emit 說明</h2>
      <ul>
        <li><strong>基本語法</strong>：this.$emit('event-name', ...args)</li>
        <li><strong>事件命名</strong>：建議使用 kebab-case，如 'add-to-cart'</li>
        <li><strong>傳遞參數</strong>：可以傳遞多個參數給父組件</li>
        <li><strong>事件監聽</strong>：父組件使用 @event-name 或 v-on:event-name 監聽</li>
        <li><strong>$event</strong>：在內聯語句中可以使用 $event 訪問傳遞的參數</li>
        <li><strong>v-model</strong>：組件上的 v-model 本質是 :value 和 @input 的語法糖</li>
      </ul>
    </section>

    <section class="tips">
      <h2>💡 注意事項</h2>
      <ul>
        <li>✨ 事件名不會自動轉換大小寫，建議始終使用 kebab-case</li>
        <li>📌 不同於組件和 prop，事件名不存在自動化的大小寫轉換</li>
        <li>⚠️ 子組件應該通過事件告訴父組件"發生了什麼"，而不是"做什麼"</li>
        <li>💡 保持單向數據流，不要在子組件中直接修改 prop</li>
      </ul>
    </section>
    </div>
  </div>
</template>

<script>
// 基礎計數按鈕組件
const ButtonCounter = {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    handleClick() {
      this.count++
      this.$emit('increment', this.count)
    }
  },
  template: `
    <button class="counter-btn" @click="handleClick">
      點擊了 {{ count }} 次
    </button>
  `
}

// 產品項目組件
const ProductItem = {
  props: ['product'],
  methods: {
    addToCart() {
      this.$emit('add-to-cart', {
        id: this.product.id,
        name: this.product.name,
        price: this.product.price
      })
    }
  },
  template: `
    <div class="product-card">
      <h4>{{ product.name }}</h4>
      <p class="price">¥{{ product.price }}</p>
      <button class="add-btn" @click="addToCart">加入購物車</button>
    </div>
  `
}

// 自定義輸入框組件
const CustomInput = {
  props: ['value'],
  methods: {
    handleInput(event) {
      this.$emit('input', event.target.value)
    }
  },
  template: `
    <input 
      class="custom-input"
      :value="value" 
      @input="handleInput"
      placeholder="輸入內容..."
    />
  `
}

export default {
  name: 'ComponentEmit',
  components: {
    ButtonCounter,
    ProductItem,
    CustomInput
  },
  data() {
    return {
      message: '等待按鈕點擊...',
      totalPrice: 0,
      products: [
        { id: 1, name: '蘋果', price: 5 },
        { id: 2, name: '香蕉', price: 3 },
        { id: 3, name: '橙子', price: 4 }
      ],
      inputValue: ''
    }
  },
  methods: {
    handleIncrement(count) {
      this.message = `按鈕被點擊了 ${count} 次`
    },
    addToCart(product) {
      this.totalPrice += product.price
      console.log('添加商品：', product.name, '¥' + product.price)
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

.result {
  display: flex;
  justify-content: center;
}

.parent-box {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  min-width: 300px;
}

.parent-box > p {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  color: #2c3e50;
}

.parent-box > p strong {
  color: #42b983;
}

.counter-btn {
  padding: 0.75rem 1.5rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.counter-btn:hover {
  background-color: #35a372;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.counter-btn:active {
  transform: translateY(0);
}

.products {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.product-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  min-width: 120px;
  transition: transform 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
}

.product-card h4 {
  margin: 0 0 0.5rem 0;
  font-size: 1.1rem;
}

.product-card .price {
  font-size: 1.3rem;
  font-weight: bold;
  margin: 0.5rem 0 1rem 0;
  color: #ffd700;
}

.add-btn {
  padding: 0.5rem 1rem;
  background-color: white;
  color: #667eea;
  border: none;
  border-radius: 4px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s;
}

.add-btn:hover {
  background-color: #f0f0f0;
  transform: scale(1.05);
}

.custom-input {
  width: 100%;
  padding: 0.75rem;
  border: 2px solid #ddd;
  border-radius: 6px;
  font-size: 1rem;
  transition: border-color 0.3s;
}

.custom-input:focus {
  outline: none;
  border-color: #42b983;
}

.price {
  color: #f59e0b;
  font-weight: bold;
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
