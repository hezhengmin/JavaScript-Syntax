<template>
  <div class="page-container">
    <div class="back-nav">
      <router-link to="/" class="back-button">← 返回首頁</router-link>
    </div>
    <div class="tutorial-page">
    <h1>過濾器</h1>
    <p class="description">Vue 2 的過濾器可以格式化文本顯示。</p>
    
    <section class="example">
      <h2>1. 大小寫轉換</h2>
      <div class="demo">
        <input v-model="text" type="text" placeholder="輸入文字">
        <p>原始：{{ text }}</p>
        <p>大寫：{{ text | uppercase }}</p>
        <p>小寫：{{ text | lowercase }}</p>
        <p>首字母大寫：{{ text | capitalize }}</p>
      </div>
    </section>

    <section class="example">
      <h2>2. 時間格式化</h2>
      <div class="demo">
        <p>當前時間：{{ currentTime }}</p>
        <p>格式化：{{ currentTime | formatDate }}</p>
        <p>詳細時間：{{ currentTime | formatDateTime }}</p>
      </div>
    </section>

    <section class="example">
      <h2>3. 數字格式化</h2>
      <div class="demo">
        <input v-model.number="price" type="number" placeholder="輸入價格">
        <p>價格：{{ price | currency }}</p>
        <p>千分位：{{ price | numberFormat }}</p>
      </div>
    </section>

    <section class="example">
      <h2>4. 串聯過濾器</h2>
      <div class="demo">
        <p>{{ text | uppercase | addPrefix }}</p>
      </div>
    </section>

    <section class="explanation">
      <h2>說明</h2>
      <ul>
        <li><strong>過濾器語法</strong>: {{ value | filterName }}</li>
        <li><strong>串聯使用</strong>: {{ value | filter1 | filter2 }}</li>
        <li><strong>局部過濾器</strong>: 在組件的 filters 選項中定義</li>
        <li><strong>全局過濾器</strong>: Vue.filter() 定義</li>
        <li><strong>注意</strong>: Vue 3 已移除過濾器功能</li>
      </ul>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FiltersIndex',
  data() {
    return {
      text: 'hello world',
      currentTime: new Date(),
      price: 1234567.89
    }
  },
  filters: {
    uppercase(value) {
      if (!value) return ''
      return value.toString().toUpperCase()
    },
    lowercase(value) {
      if (!value) return ''
      return value.toString().toLowerCase()
    },
    capitalize(value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1)
    },
    formatDate(value) {
      if (!value) return ''
      const date = new Date(value)
      return date.toLocaleDateString('zh-TW')
    },
    formatDateTime(value) {
      if (!value) return ''
      const date = new Date(value)
      return date.toLocaleString('zh-TW')
    },
    currency(value) {
      if (!value) return ''
      return '$' + Number(value).toFixed(2)
    },
    numberFormat(value) {
      if (!value) return ''
      return Number(value).toLocaleString()
    },
    addPrefix(value) {
      return '✨ ' + value
    }
  },
  mounted() {
    setInterval(() => {
      this.currentTime = new Date()
    }, 1000)
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
.demo input { padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; margin-bottom: 1rem; width: 100%; max-width: 300px; }
.demo p { margin: 0.5rem 0; font-size: 1.1rem; color: #2c3e50; }
.explanation { background-color: #f0f9ff; padding: 2rem; border-radius: 8px; border-left: 4px solid #3b82f6; }
.explanation ul { margin-left: 1.5rem; }
.explanation li { margin-bottom: 0.8rem; color: #2c3e50; }
.explanation strong { color: #3b82f6; }
</style>
