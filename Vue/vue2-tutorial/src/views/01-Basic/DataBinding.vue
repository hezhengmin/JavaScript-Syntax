<template>
  <div class="tutorial-page">
    <h1>資料綁定</h1>
    <p class="description">Vue 提供了多種數據綁定的方式，讓數據和視圖保持同步。</p>
    
    <section class="example">
      <h2>1. 文本插值 (雙大括號)</h2>
      <div class="demo">
        <p>訊息：{{ textMessage }}</p>
        <input v-model="textMessage" type="text" placeholder="修改文本">
      </div>
    </section>

    <section class="example">
      <h2>2. 綁定 HTML (v-html)</h2>
      <div class="demo">
        <div v-html="htmlContent"></div>
        <p class="warning">⚠️ 注意：只在可信內容上使用 v-html，避免 XSS 攻擊</p>
      </div>
    </section>

    <section class="example">
      <h2>3. 綁定屬性 (v-bind 或 :)</h2>
      <div class="demo">
        <img :src="imageSrc" :alt="imageAlt" style="max-width: 200px;">
        <p>圖片路徑：{{ imageSrc }}</p>
        <button @click="changeImage">更換圖片</button>
      </div>
    </section>

    <section class="example">
      <h2>4. 綁定樣式</h2>
      <div class="demo">
        <div 
          :style="{ 
            color: textColor, 
            fontSize: fontSize + 'px',
            padding: '10px',
            border: '2px solid ' + borderColor
          }"
        >
          這是一個動態樣式的元素
        </div>
        <div class="controls">
          <label>
            文字顏色：
            <input v-model="textColor" type="color">
          </label>
          <label>
            字體大小：
            <input v-model="fontSize" type="range" min="12" max="36">
            {{ fontSize }}px
          </label>
          <label>
            邊框顏色：
            <input v-model="borderColor" type="color">
          </label>
        </div>
      </div>
    </section>

    <section class="example">
      <h2>5. 表達式</h2>
      <div class="demo">
        <p>數字：{{ number }}</p>
        <p>雙倍：{{ number * 2 }}</p>
        <p>反轉：{{ message.split('').reverse().join('') }}</p>
        <p>三元運算：{{ number > 5 ? '大於5' : '小於等於5' }}</p>
        <input v-model.number="number" type="number">
        <input v-model="message" type="text">
      </div>
    </section>

    <section class="explanation">
      <h2>說明</h2>
      <ul>
        <li><strong>雙大括號 &#123;&#123; &#125;&#125;</strong>：文本插值，用於顯示數據</li>
        <li><strong>v-html</strong>：渲染 HTML 內容</li>
        <li><strong>v-bind 或 :</strong>：綁定 HTML 屬性</li>
        <li><strong>v-model</strong>：雙向數據綁定，常用於表單元素</li>
        <li><strong>表達式</strong>：模板中可以使用 JavaScript 表達式</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'DataBinding',
  data() {
    return {
      textMessage: 'Hello Vue!',
      htmlContent: '<strong style="color: #42b983;">這是粗體綠色文字</strong>',
      imageSrc: 'https://via.placeholder.com/200x150/42b983/ffffff?text=Vue',
      imageAlt: 'Vue Logo',
      textColor: '#42b983',
      fontSize: 16,
      borderColor: '#42b983',
      number: 5,
      message: 'Vue.js'
    }
  },
  methods: {
    changeImage() {
      const colors = ['42b983', 'ff6b6b', '4ecdc4', '45b7d1', 'f7b731'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      this.imageSrc = `https://via.placeholder.com/200x150/${randomColor}/ffffff?text=Changed`;
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
  border-left: 4px solid #42b983;
}

.demo input[type="text"],
.demo input[type="number"] {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  margin-top: 0.5rem;
  width: 100%;
  max-width: 400px;
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

.warning {
  color: #ff6b6b;
  font-size: 0.9rem;
  margin-top: 1rem;
}

.controls {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.controls label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.controls input[type="range"] {
  flex: 1;
  max-width: 200px;
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
