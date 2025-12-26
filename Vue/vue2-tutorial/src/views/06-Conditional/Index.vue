<template>
  <div class="page-container">
    <div class="back-nav">
      <router-link to="/" class="back-button">← 返回首頁</router-link>
    </div>
    <div class="tutorial-page">
      <h1>條件渲染</h1>
      <p class="description">使用 v-if、v-else-if、v-else 和 v-show 控制元素的顯示與隱藏。</p>
    
    <section class="example">
      <h2>1. v-show 示例</h2>
      <div class="demo">
        <h3>目前 n 的值：{{ n }}</h3>
        <div class="btn-group">
          <button @click="n++">n+1</button>
          <button @click="n--">n-1</button>
          <button @click="n=0">重置</button>
        </div>
        <div class="result">
          <div v-show="n===1" class="item">Angular（使用 v-show）</div>
          <div v-show="n===2" class="item">React（使用 v-show）</div>
          <div v-show="n===3" class="item">Vue（使用 v-show）</div>
        </div>
        <p class="hint">💡 v-show 適合頻繁切換的場景</p>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>&lt;div v-show="n===1"&gt;Angular&lt;/div&gt;
&lt;div v-show="n===2"&gt;React&lt;/div&gt;
&lt;div v-show="n===3"&gt;Vue&lt;/div&gt;

data() {
  return {
    n: 0
  }
}</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>2. v-if / v-else-if / v-else 示例</h2>
      <div class="demo">
        <h3>選擇的框架：{{ framework || '無' }}</h3>
        <div class="btn-group">
          <button @click="framework='Angular'">選擇 Angular</button>
          <button @click="framework='React'">選擇 React</button>
          <button @click="framework='Vue'">選擇 Vue</button>
          <button @click="framework=''">清除</button>
        </div>
        <div class="result">
          <div v-if="framework==='Angular'" class="item success">
            ✓ 你選擇了 Angular
          </div>
          <div v-else-if="framework==='React'" class="item warning">
            ✓ 你選擇了 React
          </div>
          <div v-else-if="framework==='Vue'" class="item info">
            ✓ 你選擇了 Vue
          </div>
          <div v-else class="item">
            請選擇一個框架
          </div>
        </div>
        <p class="hint">💡 v-if 適合條件很少改變的場景</p>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>&lt;div v-if="framework==='Angular'"&gt;Angular&lt;/div&gt;
&lt;div v-else-if="framework==='React'"&gt;React&lt;/div&gt;
&lt;div v-else-if="framework==='Vue'"&gt;Vue&lt;/div&gt;
&lt;div v-else&gt;請選擇&lt;/div&gt;</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>3. template 配合 v-if</h2>
      <div class="demo">
        <label>
          <input type="checkbox" v-model="showInfo">
          顯示用戶信息
        </label>
        <template v-if="showInfo">
          <div class="info-card">
            <h4>用戶信息</h4>
            <p>姓名：張三</p>
            <p>年齡：25</p>
            <p>城市：台北</p>
          </div>
        </template>
        <p class="hint">💡 template 不會產生實際的 DOM 元素</p>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>&lt;template v-if="showInfo"&gt;
  &lt;h4&gt;用戶信息&lt;/h4&gt;
  &lt;p&gt;姓名：張三&lt;/p&gt;
  &lt;p&gt;年齡：25&lt;/p&gt;
&lt;/template&gt;</code></pre>
      </div>
    </section>

    <section class="comparison">
      <h2>v-if vs v-show 對比</h2>
      <div class="comparison-table">
        <div class="comparison-item">
          <h4>v-if</h4>
          <ul>
            <li>✅ 真正的條件渲染</li>
            <li>✅ 切換時銷毀和重建</li>
            <li>✅ 初始為 false 不渲染</li>
            <li>✅ 適合條件少改變</li>
            <li>❌ 切換開銷較高</li>
          </ul>
        </div>
        <div class="comparison-item">
          <h4>v-show</h4>
          <ul>
            <li>✅ 簡單的 display 切換</li>
            <li>✅ 元素始終存在</li>
            <li>✅ 切換開銷低</li>
            <li>✅ 適合頻繁切換</li>
            <li>❌ 初始渲染開銷高</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="explanation">
      <h2>說明</h2>
      <ul>
        <li><strong>v-if</strong>：條件為 false 時，元素不會被渲染到 DOM</li>
        <li><strong>v-show</strong>：只是切換元素的 CSS display 屬性</li>
        <li><strong>v-else-if</strong>：必須緊跟在 v-if 或 v-else-if 後面</li>
        <li><strong>v-else</strong>：必須緊跟在 v-if 或 v-else-if 後面</li>
        <li><strong>template</strong>：不會渲染額外的 DOM 元素，只用於分組</li>
      </ul>
    </section>
  </div>
  </div>
</template>

<script>
export default {
  name: 'ConditionalIndex',
  data() {
    return {
      n: 0,
      framework: '',
      showInfo: false
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
  color: #42b983;
  margin-bottom: 1rem;
}

.btn-group {
  display: flex;
  gap: 0.5rem;
  margin: 1rem 0;
  flex-wrap: wrap;
}

.btn-group button {
  padding: 0.5rem 1rem;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9rem;
}

.btn-group button:hover {
  background-color: #35a372;
}

.result {
  margin: 1.5rem 0;
  min-height: 60px;
}

.item {
  padding: 1rem;
  border-radius: 8px;
  background-color: white;
  margin: 0.5rem 0;
  font-size: 1.1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.item.success {
  background-color: #d4edda;
  color: #155724;
  border-left: 4px solid #28a745;
}

.item.warning {
  background-color: #fff3cd;
  color: #856404;
  border-left: 4px solid #ffc107;
}

.item.info {
  background-color: #d1ecf1;
  color: #0c5460;
  border-left: 4px solid #17a2b8;
}

.hint {
  color: #666;
  font-size: 0.9rem;
  font-style: italic;
  margin-top: 1rem;
}

.info-card {
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.info-card h4 {
  color: #42b983;
  margin-bottom: 1rem;
}

.info-card p {
  margin: 0.5rem 0;
  color: #2c3e50;
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

.comparison {
  background-color: #f0f9ff;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
  margin-bottom: 2rem;
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
