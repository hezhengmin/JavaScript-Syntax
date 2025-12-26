<template>
  <div class="page-container">
    <div class="back-nav">
      <router-link to="/" class="back-button">← 返回首頁</router-link>
    </div>
    <div class="tutorial-page">
      <h1>Class 與 Style 綁定</h1>
      <p class="description">Vue 提供了 v-bind:class 和 v-bind:style 來動態綁定樣式。</p>
    
    <section class="example">
      <h2>1. 綁定 Class（對象語法）</h2>
      <div class="demo">
        <h3 :class="{ active: isActive, border: hasBorder }">
          動態 Class 綁定
        </h3>
        <div class="controls">
          <label>
            <input type="checkbox" v-model="isActive">
            啟用 active 類（紅色文字）
          </label>
          <label>
            <input type="checkbox" v-model="hasBorder">
            啟用 border 類（底部邊框）
          </label>
        </div>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>&lt;h3 :class="{ active: isActive, border: hasBorder }"&gt;
  動態 Class 綁定
&lt;/h3&gt;

data() {
  return {
    isActive: true,
    hasBorder: true
  }
}

&lt;style&gt;
.active { color: red; }
.border { border-bottom: 2px solid #f44336; }
&lt;/style&gt;</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>2. 綁定 Class（數組語法）</h2>
      <div class="demo">
        <h3 :class="[activeClass, borderClass]">
          數組語法綁定
        </h3>
        <div class="controls">
          <label>
            啟用的類：
            <input v-model="activeClass" type="text" placeholder="輸入類名">
          </label>
          <label>
            邊框類：
            <input v-model="borderClass" type="text" placeholder="輸入類名">
          </label>
        </div>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>&lt;h3 :class="[activeClass, borderClass]"&gt;
  數組語法綁定
&lt;/h3&gt;

data() {
  return {
    activeClass: 'active',
    borderClass: 'border'
  }
}</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>3. 綁定內聯樣式（對象語法）</h2>
      <div class="demo">
        <div 
          :style="{ 
            color: textColor, 
            fontSize: fontSize + 'px',
            backgroundColor: bgColor,
            padding: '20px',
            borderRadius: '8px'
          }"
          class="style-box"
        >
          這是一個動態樣式的元素
        </div>
        <div class="controls">
          <label>
            文字顏色：
            <input v-model="textColor" type="color">
          </label>
          <label>
            背景顏色：
            <input v-model="bgColor" type="color">
          </label>
          <label>
            字體大小：
            <input v-model.number="fontSize" type="range" min="12" max="48">
            {{ fontSize }}px
          </label>
        </div>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>&lt;div :style="{ 
  color: textColor, 
  fontSize: fontSize + 'px',
  backgroundColor: bgColor 
}"&gt;
  動態樣式元素
&lt;/div&gt;

data() {
  return {
    textColor: '#42b983',
    bgColor: '#f0f9ff',
    fontSize: 24
  }
}</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>4. 綁定樣式（數組語法）</h2>
      <div class="demo">
        <div :style="[baseStyles, overridingStyles]" class="style-box">
          組合多個樣式對象
        </div>
        <div class="controls">
          <button @click="toggleStyles">切換樣式</button>
        </div>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>&lt;div :style="[baseStyles, overridingStyles]"&gt;
  組合樣式
&lt;/div&gt;

data() {
  return {
    baseStyles: {
      fontSize: '18px',
      padding: '20px'
    },
    overridingStyles: {
      color: 'blue',
      backgroundColor: '#e0f7fa'
    }
  }
}</code></pre>
      </div>
    </section>

    <section class="explanation">
      <h2>說明</h2>
      <ul>
        <li><strong>:class 對象語法</strong>：{ className: boolean } 根據布爾值決定是否應用類</li>
        <li><strong>:class 數組語法</strong>：[class1, class2] 應用多個類名</li>
        <li><strong>:style 對象語法</strong>：直接綁定樣式對象</li>
        <li><strong>:style 數組語法</strong>：組合多個樣式對象</li>
        <li><strong>自動添加前綴</strong>：Vue 會自動添加瀏覽器前綴（如 -webkit-）</li>
      </ul>
    </section>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ClassStyleIndex',
  data() {
    return {
      isActive: true,
      hasBorder: true,
      activeClass: 'active',
      borderClass: 'border',
      textColor: '#42b983',
      bgColor: '#f0f9ff',
      fontSize: 24,
      baseStyles: {
        fontSize: '18px',
        padding: '20px',
        borderRadius: '8px'
      },
      overridingStyles: {
        color: 'blue',
        backgroundColor: '#e0f7fa'
      }
    }
  },
  methods: {
    toggleStyles() {
      if (this.overridingStyles.color === 'blue') {
        this.overridingStyles = {
          color: 'green',
          backgroundColor: '#c8e6c9'
        }
      } else {
        this.overridingStyles = {
          color: 'blue',
          backgroundColor: '#e0f7fa'
        }
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
  margin-bottom: 1.5rem;
  border-left: 4px solid #42b983;
}

.demo h3 {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: white;
  border-radius: 4px;
}

.demo h3.active {
  color: red;
}

.demo h3.border {
  border-bottom: 2px solid #f44336;
}

.style-box {
  text-align: center;
  font-weight: bold;
  margin-bottom: 1.5rem;
}

.controls {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 1.5rem;
}

.controls label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #2c3e50;
}

.controls input[type="text"] {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  flex: 1;
  max-width: 200px;
}

.controls input[type="range"] {
  flex: 1;
  max-width: 200px;
}

.controls button {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  max-width: 150px;
}

.controls button:hover {
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
