<template>
  <div class="tutorial-page">
    <h1>偵聽器 - 天氣案例</h1>
    <p class="description">Watch 用於監聽數據變化並執行異步或開銷較大的操作。</p>
    
    <section class="example">
      <h2>基本監聽</h2>
      <div class="demo">
        <div class="weather-card">
          <h3>今天天氣很{{ info }}</h3>
          <div class="weather-icon">{{ isHot ? '☀️' : '❄️' }}</div>
          <button @click="changeWeather">切換天氣</button>
          <div class="log">
            <h4>監聽日誌：</h4>
            <div v-for="(log, index) in logs" :key="index" class="log-item">
              {{ log }}
            </div>
          </div>
        </div>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>data() {
  return {
    isHot: true,
    logs: []
  }
},
computed: {
  info() {
    return this.isHot ? '炎熱' : '涼爽'
  }
},
watch: {
  // 監聽 isHot
  isHot: {
    immediate: true, // 初始化時立即執行
    handler(newValue, oldValue) {
      const log = `isHot 從 ${oldValue} 變為 ${newValue}`
      this.logs.push(log)
      console.log(log)
    }
  },
  // 也可以監聽 computed 屬性
  info: {
    handler(newValue, oldValue) {
      const log = `info 從 ${oldValue} 變為 ${newValue}`
      this.logs.push(log)
      console.log(log)
    }
  }
}</code></pre>
      </div>
    </section>

    <section class="example">
      <h2>簡寫形式</h2>
      <div class="demo">
        <p>計數：{{ count }}</p>
        <button @click="count++">增加</button>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>watch: {
  // 簡寫：當不需要 immediate 和 deep 時
  count(newValue, oldValue) {
    console.log(\`count 從 \${oldValue} 變為 \${newValue}\`)
  }
}

// 或使用 $watch
this.$watch('count', (newValue, oldValue) => {
  console.log(\`count 從 \${oldValue} 變為 \${newValue}\`)
})</code></pre>
      </div>
    </section>

    <section class="explanation">
      <h2>Watch 特點</h2>
      <ul>
        <li><strong>immediate</strong>：初始化時立即執行一次 handler</li>
        <li><strong>handler</strong>：監聽到變化時執行的函數</li>
        <li><strong>deep</strong>：深度監聽對象內部值的變化</li>
        <li><strong>異步操作</strong>：適合執行異步或開銷較大的操作</li>
        <li><strong>$watch</strong>：可以使用 this.$watch 動態添加監聽</li>
      </ul>
    </section>

    <section class="comparison">
      <h2>Watch vs Computed</h2>
      <div class="comparison-table">
        <div class="comparison-item">
          <h4>Watch 偵聽器</h4>
          <ul>
            <li>✅ 適合異步操作</li>
            <li>✅ 適合開銷較大的操作</li>
            <li>✅ 可以執行任意邏輯</li>
            <li>❌ 不能直接用於模板</li>
          </ul>
        </div>
        <div class="comparison-item">
          <h4>Computed 計算屬性</h4>
          <ul>
            <li>✅ 有緩存機制</li>
            <li>✅ 適合模板渲染</li>
            <li>✅ 適合同步計算</li>
            <li>❌ 不能執行異步操作</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WatchWeather',
  data() {
    return {
      isHot: true,
      logs: [],
      count: 0
    }
  },
  computed: {
    info() {
      return this.isHot ? '炎熱' : '涼爽'
    }
  },
  watch: {
    isHot: {
      immediate: true,
      handler(newValue, oldValue) {
        const log = `isHot 從 ${oldValue} 變為 ${newValue}`
        this.logs.push(log)
        console.log(log)
      }
    },
    info: {
      handler(newValue, oldValue) {
        const log = `info 從 ${oldValue} 變為 ${newValue}`
        this.logs.push(log)
        console.log(log)
      }
    },
    count(newValue, oldValue) {
      console.log(`count 從 ${oldValue} 變為 ${newValue}`)
    }
  },
  methods: {
    changeWeather() {
      this.isHot = !this.isHot
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

.weather-card {
  text-align: center;
  padding: 2rem;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
  border-radius: 12px;
  color: white;
}

.weather-card h3 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.weather-icon {
  font-size: 5rem;
  margin: 2rem 0;
}

.weather-card button {
  padding: 0.75rem 2rem;
  background-color: white;
  color: #f5576c;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s;
  margin-bottom: 2rem;
}

.weather-card button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

.log {
  background-color: rgba(255,255,255,0.2);
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: left;
  max-height: 200px;
  overflow-y: auto;
}

.log h4 {
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.log-item {
  font-size: 0.9rem;
  padding: 0.25rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.1);
}

.demo p {
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: #2c3e50;
  font-weight: bold;
}

.demo button {
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
