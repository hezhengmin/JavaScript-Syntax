<template>
  <div class="home">
    <div class="container">
      <h1>Vue 2 教學範例集</h1>
      <p class="subtitle">系統化整理的 Vue 2 核心概念與實作範例</p>
      
      <div class="tutorial-grid">
        <router-link to="/basic/intro" class="tutorial-card">
          <div class="card-icon">📘</div>
          <h3>01. 起步</h3>
          <p>Vue 基礎介紹與資料綁定</p>
          <span class="status completed">✓ 已完成</span>
        </router-link>

        <router-link to="/events/basic" class="tutorial-card">
          <div class="card-icon">🖱️</div>
          <h3>02. 事件處理</h3>
          <p>事件綁定、修飾符與鍵盤事件</p>
          <span class="status completed">✓ 已完成</span>
        </router-link>

        <router-link to="/computed/name-demo" class="tutorial-card">
          <div class="card-icon">⚡</div>
          <h3>03. 計算屬性</h3>
          <p>Computed 屬性的使用</p>
          <span class="status completed">✓ 已完成</span>
        </router-link>

        <router-link to="/watch/weather" class="tutorial-card">
          <div class="card-icon">👀</div>
          <h3>04. 偵聽器</h3>
          <p>Watch 監聽數據變化</p>
          <span class="status completed">✓ 已完成</span>
        </router-link>

        <router-link to="/class-style" class="tutorial-card">
          <div class="card-icon">🎨</div>
          <h3>05. Class 與 Style 綁定</h3>
          <p>動態樣式與類別綁定</p>
          <span class="status completed">✓ 已完成</span>
        </router-link>

        <router-link to="/conditional" class="tutorial-card">
          <div class="card-icon">🔀</div>
          <h3>06. 條件渲染</h3>
          <p>v-if、v-show 條件顯示</p>
          <span class="status completed">✓ 已完成</span>
        </router-link>

        <router-link to="/list/basic" class="tutorial-card">
          <div class="card-icon">📋</div>
          <h3>07. 列表渲染</h3>
          <p>v-for 遍歷與 key 的作用</p>
          <span class="status completed">✓ 已完成</span>
        </router-link>

        <router-link to="/form" class="tutorial-card">
          <div class="card-icon">📝</div>
          <h3>08. 表單輸入</h3>
          <p>v-model 雙向綁定</p>
          <span class="status completed">✓ 已完成</span>
        </router-link>

        <router-link to="/directives" class="tutorial-card">
          <div class="card-icon">🎯</div>
          <h3>09. 指令</h3>
          <p>內建指令與自定義指令</p>
          <span class="status completed">✓ 已完成</span>
        </router-link>

        <router-link to="/lifecycle" class="tutorial-card">
          <div class="card-icon">♻️</div>
          <h3>10. 生命週期</h3>
          <p>Vue 實例生命週期鉤子</p>
          <span class="status completed">✓ 已完成</span>
        </router-link>

        <router-link to="/component/basic" class="tutorial-card">
          <div class="card-icon">🧩</div>
          <h3>11. 組件</h3>
          <p>組件基礎、Props、Emit、Slot</p>
          <span class="status completed">✓ 已完成</span>
        </router-link>

        <router-link to="/filters" class="tutorial-card">
          <div class="card-icon">🔧</div>
          <h3>12. 過濾器</h3>
          <p>數據格式化過濾器</p>
          <span class="status completed">✓ 已完成</span>
        </router-link>

        <router-link to="/storage" class="tutorial-card">
          <div class="card-icon">💾</div>
          <h3>13. 瀏覽器存儲</h3>
          <p>LocalStorage 與 SessionStorage</p>
          <span class="status completed">✓ 已完成</span>
        </router-link>

        <router-link to="/transition" class="tutorial-card">
          <div class="card-icon">✨</div>
          <h3>14. 過渡動畫</h3>
          <p>Transition 動畫效果</p>
          <span class="status completed">✓ 已完成</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.home {
  min-height: calc(100vh - 80px);
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  padding: 3rem 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

h1 {
  color: white;
  font-size: 3rem;
  margin-bottom: 1rem;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
}

.subtitle {
  color: rgba(255,255,255,0.9);
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 3rem;
}

.tutorial-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.tutorial-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-decoration: none;
  color: #2c3e50;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.tutorial-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(0,0,0,0.15);
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.tutorial-card h3 {
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  color: #42b983;
}

.tutorial-card p {
  color: #666;
  font-size: 0.95rem;
  line-height: 1.5;
}

.status {
  margin-top: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  background-color: #f0f0f0;
  color: #666;
}

.status.completed {
  background-color: #d4edda;
  color: #155724;
}

.tutorial-card.disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.tutorial-card.disabled:hover {
  transform: none;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}
</style>
