<template>
  <div class="page-container">
    <div class="back-nav">
      <router-link to="/" class="back-button">← 返回首頁</router-link>
    </div>
    <div class="tutorial-page">
    <h1>生命週期</h1>
    <p class="description">Vue 實例從創建到銷毀的完整過程。</p>
    
    <section class="example">
      <h2>生命週期演示</h2>
      <div class="demo">
        <h3>計數器：{{ count }}</h3>
        <button @click="count++">增加</button>
        <button @click="showChild = !showChild">{{ showChild ? '隱藏' : '顯示' }}子組件</button>
        
        <div v-if="showChild" class="child-component">
          <h4>子組件（會觸發掛載和銷毀）</h4>
          <p>子組件內容</p>
        </div>

        <div class="logs">
          <h4>生命週期日誌：</h4>
          <div v-for="(log, index) in logs" :key="index" class="log-item">
            {{ log }}
          </div>
        </div>
      </div>
    </section>

    <section class="lifecycle-diagram">
      <h2>生命週期流程圖</h2>
      <div class="diagram">
        <div class="stage">
          <div class="hook">beforeCreate</div>
          <p>實例初始化後，數據觀測和事件配置之前</p>
        </div>
        <div class="arrow">↓</div>
        <div class="stage">
          <div class="hook">created</div>
          <p>實例創建完成，數據觀測、屬性和方法已配置</p>
        </div>
        <div class="arrow">↓</div>
        <div class="stage">
          <div class="hook">beforeMount</div>
          <p>掛載開始之前，render 函數首次被調用</p>
        </div>
        <div class="arrow">↓</div>
        <div class="stage highlight">
          <div class="hook">mounted</div>
          <p>實例被掛載，可以訪問 DOM 元素</p>
        </div>
        <div class="arrow">↓</div>
        <div class="stage">
          <div class="hook">beforeUpdate</div>
          <p>數據更新時，DOM 更新之前</p>
        </div>
        <div class="arrow">↓</div>
        <div class="stage">
          <div class="hook">updated</div>
          <p>DOM 已經更新完成</p>
        </div>
        <div class="arrow">↓</div>
        <div class="stage">
          <div class="hook">beforeDestroy</div>
          <p>實例銷毀之前，實例仍然可用</p>
        </div>
        <div class="arrow">↓</div>
        <div class="stage">
          <div class="hook">destroyed</div>
          <p>實例銷毀後，所有綁定被解除</p>
        </div>
      </div>
    </section>

    <section class="explanation">
      <h2>說明</h2>
      <ul>
        <li><strong>beforeCreate</strong>: 數據觀測和初始化事件還未開始</li>
        <li><strong>created</strong>: 實例創建完成，可以訪問 data、methods 等</li>
        <li><strong>beforeMount</strong>: 模板編譯完成，但還沒掛載到頁面</li>
        <li><strong>mounted</strong>: 實例掛載完成，可以訪問 DOM</li>
        <li><strong>beforeUpdate</strong>: 數據更新前調用</li>
        <li><strong>updated</strong>: DOM 更新完成後調用</li>
        <li><strong>beforeDestroy</strong>: 實例銷毀前調用，用於清理工作</li>
        <li><strong>destroyed</strong>: 實例銷毀後調用</li>
      </ul>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LifecycleIndex',
  data() {
    return {
      count: 0,
      showChild: false,
      logs: []
    }
  },
  beforeCreate() {
    this.addLog('beforeCreate: 實例初始化')
  },
  created() {
    this.addLog('created: 實例創建完成')
  },
  beforeMount() {
    this.addLog('beforeMount: 掛載前')
  },
  mounted() {
    this.addLog('mounted: 掛載完成')
  },
  beforeUpdate() {
    this.addLog('beforeUpdate: 更新前')
  },
  updated() {
    this.addLog('updated: 更新完成')
  },
  methods: {
    addLog(message) {
      if (this.logs) {
        this.logs.push(`${new Date().toLocaleTimeString()} - ${message}`)
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
h1 { color: #42b983; margin-bottom: 1rem; font-size: 2rem; }
.description { font-size: 1.1rem; color: #666; margin-bottom: 2rem; }
.example { margin-bottom: 3rem; }
h2 { color: #2c3e50; margin-bottom: 1rem; font-size: 1.5rem; border-bottom: 2px solid #42b983; padding-bottom: 0.5rem; }
.demo { background-color: #f9f9f9; padding: 2rem; border-radius: 8px; border-left: 4px solid #42b983; }
.demo h3 { color: #42b983; margin-bottom: 1rem; }
.demo button { padding: 0.5rem 1rem; background-color: #42b983; color: white; border: none; border-radius: 4px; margin: 0.5rem; cursor: pointer; }
.demo button:hover { background-color: #35a372; }
.child-component { background-color: white; padding: 1rem; margin: 1rem 0; border-radius: 4px; border-left: 4px solid #ff6b6b; }
.logs { background-color: white; padding: 1rem; margin-top: 1rem; border-radius: 4px; max-height: 200px; overflow-y: auto; }
.logs h4 { color: #42b983; margin-bottom: 0.5rem; }
.log-item { padding: 0.25rem; font-size: 0.9rem; color: #666; border-bottom: 1px solid #eee; }
.lifecycle-diagram { background-color: #f9f9f9; padding: 2rem; border-radius: 8px; margin-bottom: 2rem; }
.diagram { display: flex; flex-direction: column; align-items: center; }
.stage { background-color: white; padding: 1.5rem; border-radius: 8px; margin: 0.5rem 0; width: 100%; max-width: 500px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.stage.highlight { background-color: #d4edda; border-left: 4px solid #28a745; }
.hook { font-weight: bold; color: #42b983; font-size: 1.2rem; margin-bottom: 0.5rem; }
.stage p { color: #666; font-size: 0.9rem; margin: 0; }
.arrow { font-size: 2rem; color: #42b983; margin: 0.5rem 0; }
.explanation { background-color: #f0f9ff; padding: 2rem; border-radius: 8px; border-left: 4px solid #3b82f6; }
.explanation ul { margin-left: 1.5rem; }
.explanation li { margin-bottom: 0.8rem; color: #2c3e50; }
.explanation strong { color: #3b82f6; }
</style>
