<template>
  <div class="tutorial-page">
    <h1>深度監聽</h1>
    <p class="description">使用 deep 選項監聽對象內部值的變化。</p>
    
    <section class="example">
      <h2>深度監聽對象</h2>
      <div class="demo">
        <h3>人員信息</h3>
        <div class="input-group">
          <label>姓名：</label>
          <input v-model="person.name" type="text">
        </div>
        <div class="input-group">
          <label>年齡：</label>
          <input v-model.number="person.age" type="number">
        </div>
        <div class="input-group">
          <label>城市：</label>
          <input v-model="person.address.city" type="text">
        </div>
        <div class="log">
          <h4>監聽日誌：</h4>
          <div v-for="(log, index) in logs" :key="index" class="log-item">
            {{ log }}
          </div>
        </div>
      </div>
      
      <div class="code">
        <h3>代碼：</h3>
        <pre><code>data() {
  return {
    person: {
      name: '張三',
      age: 18,
      address: {
        city: '台北'
      }
    },
    logs: []
  }
},
watch: {
  // 深度監聽
  person: {
    deep: true, // 開啟深度監聽
    handler(newValue, oldValue) {
      // 注意：newValue 和 oldValue 指向同一個對象
      this.logs.push(\`person 對象發生變化 \${new Date().toLocaleTimeString()}\`)
    }
  },
  // 監聽對象的某個屬性
  'person.name': {
    handler(newValue, oldValue) {
      this.logs.push(\`name 從 \${oldValue} 變為 \${newValue}\`)
    }
  }
}</code></pre>
      </div>
    </section>

    <section class="explanation">
      <h2>深度監聽注意事項</h2>
      <ul>
        <li><strong>deep: true</strong>：監聽對象內部所有層級的變化</li>
        <li><strong>性能開銷</strong>：深度監聽會遍歷對象的所有屬性，開銷較大</li>
        <li><strong>監聽單個屬性</strong>：可以使用 'person.name' 格式監聽特定屬性</li>
        <li><strong>newValue === oldValue</strong>：對象類型的 newValue 和 oldValue 指向同一個對象</li>
        <li><strong>數組變化</strong>：數組的變更方法（push、pop等）也會觸發監聽</li>
      </ul>
    </section>
  </div>
</template>

<script>
export default {
  name: 'WatchDeep',
  data() {
    return {
      person: {
        name: '張三',
        age: 18,
        address: {
          city: '台北'
        }
      },
      logs: []
    }
  },
  watch: {
    person: {
      deep: true,
      handler(newValue) {
        const log = `person 對象發生變化 ${new Date().toLocaleTimeString()}`
        this.logs.push(log)
        console.log(log, newValue)
      }
    },
    'person.name': {
      handler(newValue, oldValue) {
        const log = `name 從 ${oldValue} 變為 ${newValue}`
        this.logs.push(log)
      }
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

.demo h3 {
  color: #42b983;
  margin-bottom: 1rem;
}

.input-group {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.input-group label {
  min-width: 80px;
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

.log {
  margin-top: 2rem;
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  max-height: 250px;
  overflow-y: auto;
}

.log h4 {
  color: #42b983;
  margin-bottom: 0.5rem;
  font-size: 1rem;
}

.log-item {
  font-size: 0.9rem;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  color: #666;
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
