<template>
  <div class="page-container">
    <div class="back-nav">
      <router-link to="/" class="back-button">← 返回首頁</router-link>
    </div>
    <div class="tutorial-page">
    <h1>過渡動畫</h1>
    <p class="description">使用 &lt;transition&gt; 組件為元素添加進入/離開動畫。</p>
    
    <section class="example">
      <h2>1. 基礎過渡</h2>
      <div class="demo">
        <button @click="show1 = !show1">切換</button>
        <transition name="fade">
          <p v-if="show1" class="box">淡入淡出效果</p>
        </transition>
      </div>
    </section>

    <section class="example">
      <h2>2. 滑動效果</h2>
      <div class="demo">
        <button @click="show2 = !show2">切換</button>
        <transition name="slide">
          <div v-if="show2" class="box">從右側滑入</div>
        </transition>
      </div>
    </section>

    <section class="example">
      <h2>3. 縮放效果</h2>
      <div class="demo">
        <button @click="show3 = !show3">切換</button>
        <transition name="zoom">
          <div v-if="show3" class="box">縮放動畫</div>
        </transition>
      </div>
    </section>

    <section class="example">
      <h2>4. 彈跳效果</h2>
      <div class="demo">
        <button @click="show4 = !show4">切換</button>
        <transition name="bounce">
          <div v-if="show4" class="box">彈跳效果</div>
        </transition>
      </div>
    </section>

    <section class="example">
      <h2>5. 列表過渡</h2>
      <div class="demo">
        <button @click="addItem">添加</button>
        <button @click="removeItem">刪除</button>
        <transition-group name="list" tag="div" class="list-container">
          <div v-for="item in list" :key="item" class="list-item">
            項目 {{ item }}
          </div>
        </transition-group>
      </div>
    </section>

    <section class="explanation">
      <h2>說明</h2>
      <ul>
        <li><strong>v-enter</strong>: 進入過渡的開始狀態</li>
        <li><strong>v-enter-active</strong>: 進入過渡生效時的狀態</li>
        <li><strong>v-enter-to</strong>: 進入過渡的結束狀態</li>
        <li><strong>v-leave</strong>: 離開過渡的開始狀態</li>
        <li><strong>v-leave-active</strong>: 離開過渡生效時的狀態</li>
        <li><strong>v-leave-to</strong>: 離開過渡的結束狀態</li>
        <li><strong>transition-group</strong>: 用於列表過渡</li>
      </ul>
    </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TransitionIndex',
  data() {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      list: [1, 2, 3],
      nextNum: 4
    }
  },
  methods: {
    addItem() {
      this.list.push(this.nextNum++)
    },
    removeItem() {
      this.list.pop()
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
.demo { background-color: #f9f9f9; padding: 2rem; border-radius: 8px; border-left: 4px solid #42b983; min-height: 150px; }
.demo button { padding: 0.5rem 1rem; background-color: #42b983; color: white; border: none; border-radius: 4px; cursor: pointer; margin: 0.5rem; }
.demo button:hover { background-color: #35a372; }
.box { background-color: white; padding: 1rem; margin-top: 1rem; border-radius: 4px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }

/* 淡入淡出 */
.fade-enter-active, .fade-leave-active { transition: opacity 0.5s; }
.fade-enter, .fade-leave-to { opacity: 0; }

/* 滑動 */
.slide-enter-active, .slide-leave-active { transition: all 0.5s; }
.slide-enter { transform: translateX(100%); opacity: 0; }
.slide-leave-to { transform: translateX(-100%); opacity: 0; }

/* 縮放 */
.zoom-enter-active, .zoom-leave-active { transition: all 0.5s; }
.zoom-enter, .zoom-leave-to { transform: scale(0); opacity: 0; }

/* 彈跳 */
.bounce-enter-active { animation: bounce-in 0.5s; }
.bounce-leave-active { animation: bounce-in 0.5s reverse; }
@keyframes bounce-in {
  0% { transform: scale(0); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
}

/* 列表 */
.list-container { margin-top: 1rem; }
.list-item { background-color: white; padding: 0.5rem 1rem; margin: 0.5rem 0; border-radius: 4px; }
.list-enter-active, .list-leave-active { transition: all 0.5s; }
.list-enter, .list-leave-to { opacity: 0; transform: translateX(30px); }
.list-move { transition: transform 0.5s; }

.explanation { background-color: #f0f9ff; padding: 2rem; border-radius: 8px; border-left: 4px solid #3b82f6; }
.explanation ul { margin-left: 1.5rem; }
.explanation li { margin-bottom: 0.8rem; color: #2c3e50; }
.explanation strong { color: #3b82f6; }
</style>
