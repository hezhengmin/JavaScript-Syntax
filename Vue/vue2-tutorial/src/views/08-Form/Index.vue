<template>
  <div class="page-container">
    <div class="back-nav">
      <router-link to="/" class="back-button">← 返回首頁</router-link>
    </div>
    <div class="tutorial-page">
    <h1>表單輸入綁定</h1>
    <p class="description">使用 v-model 在表單元素上創建雙向數據綁定。</p>
    
    <section class="example">
      <h2>1. 文本輸入</h2>
      <div class="demo">
        <input v-model="text" type="text" placeholder="輸入文本">
        <p>輸入的內容：{{ text }}</p>
      </div>
    </section>

    <section class="example">
      <h2>2. 多行文本</h2>
      <div class="demo">
        <textarea v-model="message" rows="4" placeholder="輸入多行文本"></textarea>
        <p>多行內容：</p>
        <pre>{{ message }}</pre>
      </div>
    </section>

    <section class="example">
      <h2>3. 複選框</h2>
      <div class="demo">
        <label><input type="checkbox" v-model="checked"> 單個複選框</label>
        <p>選中狀態：{{ checked }}</p>
        
        <h4>多個複選框：</h4>
        <label><input type="checkbox" value="Vue" v-model="checkedNames"> Vue</label>
        <label><input type="checkbox" value="React" v-model="checkedNames"> React</label>
        <label><input type="checkbox" value="Angular" v-model="checkedNames"> Angular</label>
        <p>選中的：{{ checkedNames }}</p>
      </div>
    </section>

    <section class="example">
      <h2>4. 單選按鈕</h2>
      <div class="demo">
        <label><input type="radio" value="男" v-model="gender"> 男</label>
        <label><input type="radio" value="女" v-model="gender"> 女</label>
        <p>選擇的性別：{{ gender }}</p>
      </div>
    </section>

    <section class="example">
      <h2>5. 選擇列表</h2>
      <div class="demo">
        <select v-model="selected">
          <option disabled value="">請選擇</option>
          <option>Vue</option>
          <option>React</option>
          <option>Angular</option>
        </select>
        <p>選中：{{ selected }}</p>
      </div>
    </section>

    <section class="example">
      <h2>6. 修飾符</h2>
      <div class="demo">
        <h4>.lazy - 在 change 時更新</h4>
        <input v-model.lazy="lazyText" type="text">
        <p>{{ lazyText }}</p>

        <h4>.number - 轉為數字</h4>
        <input v-model.number="age" type="number">
        <p>年齡（類型：{{ typeof age }}）：{{ age }}</p>

        <h4>.trim - 去除首尾空格</h4>
        <input v-model.trim="trimText" type="text">
        <p>"{{ trimText }}"</p>
      </div>
    </section>

    <section class="explanation">
      <h2>說明</h2>
      <ul>
        <li><strong>v-model</strong>: 雙向數據綁定</li>
        <li><strong>.lazy</strong>: 將 input 事件改為 change 事件</li>
        <li><strong>.number</strong>: 自動轉換為數字類型</li>
        <li><strong>.trim</strong>: 自動過濾首尾空白字符</li>
      </ul>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormIndex',
  data() {
    return {
      text: '',
      message: '',
      checked: false,
      checkedNames: [],
      gender: '',
      selected: '',
      lazyText: '',
      age: 0,
      trimText: ''
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
.demo input, .demo textarea, .demo select { padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; margin: 0.5rem; }
.demo label { margin: 0.5rem 1rem 0.5rem 0; }
.demo h4 { color: #42b983; margin-top: 1rem; }
.demo p { margin: 0.5rem 0; color: #2c3e50; }
.demo pre { background-color: white; padding: 1rem; border-radius: 4px; }
.explanation { background-color: #f0f9ff; padding: 2rem; border-radius: 8px; border-left: 4px solid #3b82f6; }
.explanation ul { margin-left: 1.5rem; }
.explanation li { margin-bottom: 0.8rem; color: #2c3e50; }
.explanation strong { color: #3b82f6; }
</style>
