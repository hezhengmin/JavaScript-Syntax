<template>
  <div class="page-container">
    <div class="back-nav">
      <router-link to="/" class="back-button">← 返回首頁</router-link>
    </div>
    <div class="tutorial-page">
    <h1>瀏覽器存儲</h1>
    <p class="description">使用 LocalStorage 和 SessionStorage 存儲數據。</p>
    
    <section class="example">
      <h2>1. LocalStorage（持久化存儲）</h2>
      <div class="demo">
        <div class="input-group">
          <input v-model="localKey" type="text" placeholder="鍵">
          <input v-model="localValue" type="text" placeholder="值">
          <button @click="saveToLocal">保存</button>
          <button @click="getFromLocal">讀取</button>
          <button @click="removeFromLocal">刪除</button>
          <button @click="clearLocal">清空全部</button>
        </div>
        <div class="result">
          <h4>存儲的數據：</h4>
          <p>{{ localResult }}</p>
        </div>
      </div>
    </section>

    <section class="example">
      <h2>2. SessionStorage（會話存儲）</h2>
      <div class="demo">
        <div class="input-group">
          <input v-model="sessionKey" type="text" placeholder="鍵">
          <input v-model="sessionValue" type="text" placeholder="值">
          <button @click="saveToSession">保存</button>
          <button @click="getFromSession">讀取</button>
          <button @click="removeFromSession">刪除</button>
          <button @click="clearSession">清空全部</button>
        </div>
        <div class="result">
          <h4>存儲的數據：</h4>
          <p>{{ sessionResult }}</p>
        </div>
        <p class="hint">💡 關閉瀏覽器標籤頁後，SessionStorage 會被清空</p>
      </div>
    </section>

    <section class="example">
      <h2>3. 存儲對象</h2>
      <div class="demo">
        <div class="input-group">
          <input v-model="userInfo.name" type="text" placeholder="姓名">
          <input v-model.number="userInfo.age" type="number" placeholder="年齡">
          <input v-model="userInfo.city" type="text" placeholder="城市">
          <button @click="saveUser">保存用戶</button>
          <button @click="loadUser">讀取用戶</button>
        </div>
        <div class="result" v-if="loadedUser">
          <h4>讀取的用戶：</h4>
          <p>姓名：{{ loadedUser.name }}</p>
          <p>年齡：{{ loadedUser.age }}</p>
          <p>城市：{{ loadedUser.city }}</p>
        </div>
      </div>
    </section>

    <section class="explanation">
      <h2>LocalStorage vs SessionStorage</h2>
      <div class="comparison-table">
        <div class="comparison-item">
          <h4>LocalStorage</h4>
          <ul>
            <li>✅ 永久存儲</li>
            <li>✅ 關閉瀏覽器後仍保留</li>
            <li>✅ 同源共享</li>
            <li>✅ 容量約 5-10MB</li>
          </ul>
        </div>
        <div class="comparison-item">
          <h4>SessionStorage</h4>
          <ul>
            <li>✅ 會話存儲</li>
            <li>❌ 關閉標籤頁後清空</li>
            <li>❌ 標籤頁獨立</li>
            <li>✅ 容量約 5-10MB</li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StorageIndex',
  data() {
    return {
      localKey: '',
      localValue: '',
      localResult: '',
      sessionKey: '',
      sessionValue: '',
      sessionResult: '',
      userInfo: { name: '', age: 0, city: '' },
      loadedUser: null
    }
  },
  methods: {
    saveToLocal() {
      localStorage.setItem(this.localKey, this.localValue)
      alert('保存成功')
    },
    getFromLocal() {
      this.localResult = localStorage.getItem(this.localKey) || '未找到數據'
    },
    removeFromLocal() {
      localStorage.removeItem(this.localKey)
      alert('刪除成功')
    },
    clearLocal() {
      localStorage.clear()
      alert('清空成功')
    },
    saveToSession() {
      sessionStorage.setItem(this.sessionKey, this.sessionValue)
      alert('保存成功')
    },
    getFromSession() {
      this.sessionResult = sessionStorage.getItem(this.sessionKey) || '未找到數據'
    },
    removeFromSession() {
      sessionStorage.removeItem(this.sessionKey)
      alert('刪除成功')
    },
    clearSession() {
      sessionStorage.clear()
      alert('清空成功')
    },
    saveUser() {
      localStorage.setItem('user', JSON.stringify(this.userInfo))
      alert('用戶信息已保存')
    },
    loadUser() {
      const userData = localStorage.getItem('user')
      if (userData) {
        this.loadedUser = JSON.parse(userData)
      } else {
        alert('未找到用戶信息')
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
.input-group { display: flex; gap: 0.5rem; margin-bottom: 1rem; flex-wrap: wrap; }
.input-group input { padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; flex: 1; min-width: 100px; }
.input-group button { padding: 0.5rem 1rem; background-color: #42b983; color: white; border: none; border-radius: 4px; cursor: pointer; }
.result { background-color: white; padding: 1rem; border-radius: 4px; margin-top: 1rem; }
.result h4 { color: #42b983; margin-bottom: 0.5rem; }
.result p { margin: 0.25rem 0; color: #2c3e50; }
.hint { color: #666; font-size: 0.9rem; font-style: italic; margin-top: 1rem; }
.explanation { margin-bottom: 2rem; }
.comparison-table { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
.comparison-item { background-color: white; padding: 1.5rem; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
.comparison-item h4 { color: #42b983; margin-bottom: 1rem; }
.comparison-item ul { list-style: none; padding: 0; }
.comparison-item li { margin-bottom: 0.5rem; color: #2c3e50; }
</style>
