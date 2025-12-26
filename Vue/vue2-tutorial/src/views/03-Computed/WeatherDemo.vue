<template>
  <div class="tutorial-page">
    <h1>計算屬性 - 天氣案例</h1>
    <p class="description">使用 computed 實現天氣切換的案例。</p>
    
    <section class="example">
      <h2>天氣切換</h2>
      <div class="demo">
        <div class="weather-card">
          <h3>今天天氣很{{ info }}</h3>
          <div class="weather-icon">{{ isHot ? '☀️' : '❄️' }}</div>
          <button @click="changeWeather">切換天氣</button>
        </div>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>data() {
  return {
    isHot: true
  }
},
computed: {
  info() {
    return this.isHot ? '炎熱' : '涼爽'
  }
},
methods: {
  changeWeather() {
    this.isHot = !this.isHot
  }
}</code></pre>
      </div>
    </section>

    <section class="explanation">
      <h2>說明</h2>
      <ul>
        <li><strong>computed 屬性</strong>：info 根據 isHot 自動計算</li>
        <li><strong>響應式更新</strong>：isHot 改變時，info 自動更新</li>
        <li><strong>模板簡潔</strong>：模板中直接使用 info，邏輯清晰</li>
        <li><strong>可維護性</strong>：邏輯集中在 computed 中，易於維護</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'ComputedWeatherDemo',
  data() {
    return {
      isHot: true
    }
  },
  computed: {
    info() {
      return this.isHot ? '炎熱' : '涼爽'
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
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  color: #667eea;
  border: none;
  border-radius: 24px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all 0.3s;
}

.weather-card button:hover {
  transform: scale(1.05);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
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
